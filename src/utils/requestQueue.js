/*
 * @FilePath: /click/Users/i104/vite3/src/utils/requestQueue.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import axios from 'axios'

const maxAxiosCount = 1

export default class RequestQueue {
    constructor() {
        this.max = maxAxiosCount
        this.pendingList = []
        this.requestList = []
        this.reAxiosList = []
        this.instance = axios.create({
            baseURL: 'https://some-domain.com/api/',
            method: 'get',
            timeout: 2000,
            headers: {
                'X-Custom-Header': 'bambam',
                'Content-Type': 'application/json'
            }
        })
    }

    async request(config = {}) {
        // 超过最大并行请求数，加入pending队列
        if (this?.isPending()) {
            await new Promise(resolve => this.addPending({ fn: resolve, name: config.name }))
        }
        this.addRequest(config)
        const [isError, result, isReAxios] = await this.doRequest(config)
        const { reAxiosCb } = config
        if (isReAxios) {
            return reAxiosCb([isError, result])
        }
        return new Promise((resolve, reject) => {
            isError ? reject(result) : resolve(result)
        })
    }

    async doRequest(config) {
        const result = await this.instance(config).then(response => {
            this.removeFromList(config.name)
            this.requestNext(config)
            return [false, response]
        }).catch(error => {
            this.removeFromList(config.name)
            if (config.reAxiosCount < config.maxReAxiosCount - 1) {
                this.addReAxios(config)
                this.requestNext(config)
            }
            return [true, error, config.reAxiosCount === 0 ? false : true]
        })
        return result
    }

    addRequest(config) {
        this.requestList.push(config)
    }

    addPending(pendingReq) {
        this.pendingList.push(pendingReq)
    }

    addReAxios(config) {
        this.reAxiosList.push(config)
    }

    removeFromList(name) {
        [this.pendingList, this.requestList, this.reAxiosList].forEach(item => {
            const index = item.findIndex(_item => _item.name === name)
            index >= 0 && item.splice(index, 1)
        })
    }

    isPending() {
        const diff = this.max - this.requestList.length
        return diff === 0
    }

    requestNext(config) {
        if (this.pendingList.length) {
            this.pendingList.shift().fn?.()
        } else if (this.reAxiosList.length) {
            const nextRequest = this.reAxiosList.find(item => item.name === config.name)
            this.request({ ...nextRequest, reAxiosCount: nextRequest.reAxiosCount + 1 })
        }
    }
}