"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameRealPath = isSameRealPath;
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
function normalize(filePath) {
    let normPath = path.normalize(filePath);
    if (os.platform() === 'win32') {
        // Normalize drive letters on Windows.
        normPath = normPath.replace(/^([a-zA-Z]):/, (_m, p1) => p1.toLowerCase() + ':');
    }
    return normPath;
}
function isSameRealPath(filePathA, filePathB) {
    const a = normalize(fs.realpathSync(path.normalize(filePathA)));
    const b = normalize(fs.realpathSync(path.normalize(filePathB)));
    return a === b;
}
//# sourceMappingURL=pathnormalize.js.map