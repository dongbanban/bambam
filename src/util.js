import path from "path";

function resolveRootPath(p) {
  return path.join(__dirname, "..", p);
}

export { resolveRootPath };
