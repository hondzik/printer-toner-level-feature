/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $24c52f343453d62d$var$ownKeys = function(o) {
    $24c52f343453d62d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $24c52f343453d62d$var$ownKeys(o);
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $24c52f343453d62d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $24c52f343453d62d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __esDecorate: $24c52f343453d62d$export$3a84e1ae4e97e9b0,
    __runInitializers: $24c52f343453d62d$export$d831c04e792af3d,
    __propKey: $24c52f343453d62d$export$6a2a36740a146cb8,
    __setFunctionName: $24c52f343453d62d$export$d1a06452d3489bc7,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $24c52f343453d62d$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.1");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$y(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$P(t, i) {
    if (!$f58f44579a4747ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$V(t, s);
        if (this.el = $f58f44579a4747ac$var$N.createElement(f, n), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$H : "?" === e[1] ? $f58f44579a4747ac$var$I : "@" === e[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$C.currentNode = e;
        let h = $f58f44579a4747ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$C.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.O($f58f44579a4747ac$var$l()), this.O($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$S(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$S(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$S(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$e,
    P: $f58f44579a4747ac$var$h,
    A: $f58f44579a4747ac$var$o,
    C: 1,
    L: $f58f44579a4747ac$var$V,
    R: $f58f44579a4747ac$var$M,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$k,
    N: $f58f44579a4747ac$var$I,
    U: $f58f44579a4747ac$var$L,
    B: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$j?.($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.1");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $19fe8e3abedf4df0$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $19fe8e3abedf4df0$export$53a6892c50694894)
}, $9cd908ed2625c047$export$8d623b1670eb40f4 = (t = $9cd908ed2625c047$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.C(o, void 0, t, e), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $9cd908ed2625c047$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(r) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $ed34c589b230c255$var$e;
function $ed34c589b230c255$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($ed34c589b230c255$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}





const $3b5ddbac5a56879d$export$80c40bf24173ffb7 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  .toners {
    display: flex;
    flex-direction: column;
    height: var(--feature-height, 42px);
    overflow: none;
  }

  .color.toners {
    /* double feature height + flex gap */
    height: calc(2 * var(--feature-height, 42px) + 12px);
  }

  .toner {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .toner > :first-child {
    flex: 1;
  }

  .toner > :last-child {
    width: 45px;
    text-align: right;
  }

  .toner .background {
    border: 1px solid;
    border-radius: 5px;
    height: 8px;
  }

  .toner .level {
    height: 100%;
  }

  .toner .percent {
    font-size: var(--ha-font-size-s);
    font-weight: var(--ha-font-weight-normal);
    letter-spacing: 0.4px;
    color: var(--primary-text-color);
  }

  .toner .percent::after {
    content: "%";
    margin-left: 2px;
  }

  .cyan.toner .background {
    background-color: rgba(0, 255, 255, 0.3);
    border-color: rgba(0, 255, 255, 0.8);
  }

  .cyan.toner .level {
    background-color: rgba(0, 255, 255, 0.7);
  }

  .magenta.toner .background {
    background-color: rgba(255, 0, 255, 0.3);
    border-color: rgba(255, 0, 255, 0.8);
  }

  .magenta.toner .level {
    background-color: rgb(255, 0, 255, 0.7);
  }

  .yellow.toner .background {
    background-color: rgba(255, 255, 0, 0.3);
    border-color: rgba(255, 255, 0, 0.8);
  }

  .yellow.toner .level {
    background-color: rgba(255, 255, 0, 0.7);
  }

  .black.toner .background {
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 0, 0, 0.8);
  }

  .black-as-white .black.toner .background {
    background-color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
  }

  .black.toner .level {
    background-color: rgba(0, 0, 0, 0.7);
  }
    
  .black-as-white .black.toner .level {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;









/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ 

var $eef623724bdc3ca1$export$896afd8541959ee5;
(function(ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */ ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */ ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */ ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */ ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */ ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */ ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */ ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */ ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */ ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */ ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */ ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */ ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */ ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */ ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */ ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */ ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */ ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})($eef623724bdc3ca1$export$896afd8541959ee5 || ($eef623724bdc3ca1$export$896afd8541959ee5 = {}));




var $1aa47907aab6f291$export$b87f371cbc396fcf;
(function(TYPE) {
    /**
     * Raw text
     */ TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */ TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */ TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */ TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */ TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */ TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */ TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */ TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */ TYPE[TYPE["tag"] = 8] = "tag";
})($1aa47907aab6f291$export$b87f371cbc396fcf || ($1aa47907aab6f291$export$b87f371cbc396fcf = {}));
var $1aa47907aab6f291$export$906452485466fa53;
(function(SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})($1aa47907aab6f291$export$906452485466fa53 || ($1aa47907aab6f291$export$906452485466fa53 = {}));
function $1aa47907aab6f291$export$cfa10c5697238752(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.literal;
}
function $1aa47907aab6f291$export$4f55724281bdfaf9(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.argument;
}
function $1aa47907aab6f291$export$e11187b219e191e1(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.number;
}
function $1aa47907aab6f291$export$32d811605da75f40(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.date;
}
function $1aa47907aab6f291$export$34ec46f596b1702f(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.time;
}
function $1aa47907aab6f291$export$dcfe1c11d168b5a1(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.select;
}
function $1aa47907aab6f291$export$6c796d116f0a4fbc(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.plural;
}
function $1aa47907aab6f291$export$c0ece297bdd0c082(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.pound;
}
function $1aa47907aab6f291$export$5c83de34745812b(el) {
    return el.type === $1aa47907aab6f291$export$b87f371cbc396fcf.tag;
}
function $1aa47907aab6f291$export$3f9a19cd4152eda3(el) {
    return !!(el && typeof el === 'object' && el.type === $1aa47907aab6f291$export$906452485466fa53.number);
}
function $1aa47907aab6f291$export$7680c41f1a55f4cf(el) {
    return !!(el && typeof el === 'object' && el.type === $1aa47907aab6f291$export$906452485466fa53.dateTime);
}
function $1aa47907aab6f291$export$f0ac572c1121c662(value) {
    return {
        type: $1aa47907aab6f291$export$b87f371cbc396fcf.literal,
        value: value
    };
}
function $1aa47907aab6f291$export$425e864b0ba114f1(value, style) {
    return {
        type: $1aa47907aab6f291$export$b87f371cbc396fcf.number,
        value: value,
        style: style
    };
}


// @generated from regex-gen.ts
var $9667c2b9cf9fb3c7$export$523451f94304dd6c = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var $9667c2b9cf9fb3c7$export$2b8db14d8bcaece7 = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;


/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */ var $0260c25359eac13a$var$DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function $0260c25359eac13a$export$f7b99fb377fe69fa(skeleton) {
    var result = {};
    skeleton.replace($0260c25359eac13a$var$DATE_TIME_REGEX, function(match) {
        var len = match.length;
        switch(match[0]){
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = [
                    'numeric',
                    '2-digit',
                    'short',
                    'long',
                    'narrow'
                ][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) throw new RangeError('`e..eee` (weekday) patterns are not supported');
                result.weekday = [
                    'short',
                    'long',
                    'narrow',
                    'short'
                ][len - 4];
                break;
            case 'c':
                if (len < 4) throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                result.weekday = [
                    'short',
                    'long',
                    'narrow',
                    'short'
                ][len - 4];
                break;
            // Period
            case 'a':
                result.hour12 = true;
                break;
            case 'b':
            case 'B':
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            // Second
            case 's':
                result.second = [
                    'numeric',
                    '2-digit'
                ][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z':
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z':
            case 'O':
            case 'v':
            case 'V':
            case 'X':
            case 'x':
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}



// @generated from regex-gen.ts
var $565a648d1043be88$export$2b8db14d8bcaece7 = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;


function $7b45dedea56560e9$export$71cee2f16fba2480(skeleton) {
    if (skeleton.length === 0) throw new Error('Number skeleton cannot be empty');
    // Parse the skeleton
    var stringTokens = skeleton.split((0, $565a648d1043be88$export$2b8db14d8bcaece7)).filter(function(x) {
        return x.length > 0;
    });
    var tokens = [];
    for(var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++){
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) throw new Error('Invalid number skeleton');
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for(var _a = 0, options_1 = options; _a < options_1.length; _a++){
            var option = options_1[_a];
            if (option.length === 0) throw new Error('Invalid number skeleton');
        }
        tokens.push({
            stem: stem,
            options: options
        });
    }
    return tokens;
}
function $7b45dedea56560e9$var$icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var $7b45dedea56560e9$var$FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var $7b45dedea56560e9$var$SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var $7b45dedea56560e9$var$INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var $7b45dedea56560e9$var$CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function $7b45dedea56560e9$var$parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') result.roundingPriority = 'morePrecision';
    else if (str[str.length - 1] === 's') result.roundingPriority = 'lessPrecision';
    str.replace($7b45dedea56560e9$var$SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        } else if (g2 === '+') result.minimumSignificantDigits = g1.length;
        else if (g1[0] === '#') result.maximumSignificantDigits = g1.length;
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function $7b45dedea56560e9$var$parseSign(str) {
    switch(str){
        case 'sign-auto':
            return {
                signDisplay: 'auto'
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting'
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always'
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting'
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero'
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting'
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never'
            };
    }
}
function $7b45dedea56560e9$var$parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering'
        };
        stem = stem.slice(2);
    } else if (stem[0] === 'E') {
        result = {
            notation: 'scientific'
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        } else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!$7b45dedea56560e9$var$CONCISE_INTEGER_WIDTH_REGEX.test(stem)) throw new Error('Malformed concise eng/scientific notation');
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function $7b45dedea56560e9$var$parseNotationOptions(opt) {
    var result = {};
    var signOpts = $7b45dedea56560e9$var$parseSign(opt);
    if (signOpts) return signOpts;
    return result;
}
function $7b45dedea56560e9$export$47c6f8480bda3e11(tokens) {
    var result = {};
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        switch(token.stem){
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = $7b45dedea56560e9$var$icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, result), {
                    notation: 'scientific'
                }), token.options.reduce(function(all, opt) {
                    return (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, all), $7b45dedea56560e9$var$parseNotationOptions(opt));
                }, {}));
                continue;
            case 'engineering':
                result = (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, result), {
                    notation: 'engineering'
                }), token.options.reduce(function(all, opt) {
                    return (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, all), $7b45dedea56560e9$var$parseNotationOptions(opt));
                }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) throw new RangeError('integer-width stems only accept a single optional option');
                token.options[0].replace($7b45dedea56560e9$var$INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
                    if (g1) result.minimumIntegerDigits = g2.length;
                    else if (g3 && g4) throw new Error('We currently do not support maximum integer digits');
                    else if (g5) throw new Error('We currently do not support exact integer digits');
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if ($7b45dedea56560e9$var$CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if ($7b45dedea56560e9$var$FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) throw new RangeError('Fraction-precision stems only accept a single optional option');
            token.stem.replace($7b45dedea56560e9$var$FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') result.minimumFractionDigits = g1.length;
                else if (g3 && g3[0] === '#') result.maximumFractionDigits = g3.length;
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                } else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') result = (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, result), {
                trailingZeroDisplay: 'stripIfInteger'
            });
            else if (opt) result = (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, result), $7b45dedea56560e9$var$parseSignificantPrecision(opt));
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if ($7b45dedea56560e9$var$SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, result), $7b45dedea56560e9$var$parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = $7b45dedea56560e9$var$parseSign(token.stem);
        if (signOpts) result = (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, result), signOpts);
        var conciseScientificAndEngineeringOpts = $7b45dedea56560e9$var$parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) result = (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, result), conciseScientificAndEngineeringOpts);
    }
    return result;
}




// @generated from time-data-gen.ts
// prettier-ignore  
var $070e66412f8f2803$export$a8c9209db4084317 = {
    "AX": [
        "H"
    ],
    "BQ": [
        "H"
    ],
    "CP": [
        "H"
    ],
    "CZ": [
        "H"
    ],
    "DK": [
        "H"
    ],
    "FI": [
        "H"
    ],
    "ID": [
        "H"
    ],
    "IS": [
        "H"
    ],
    "ML": [
        "H"
    ],
    "NE": [
        "H"
    ],
    "RU": [
        "H"
    ],
    "SE": [
        "H"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "AS": [
        "h",
        "H"
    ],
    "BT": [
        "h",
        "H"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "GH": [
        "h",
        "H"
    ],
    "IN": [
        "h",
        "H"
    ],
    "LS": [
        "h",
        "H"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PW": [
        "h",
        "H"
    ],
    "SO": [
        "h",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WS": [
        "h",
        "H"
    ],
    "001": [
        "H",
        "h"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "AR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CL": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CU": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BO": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-EC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-PE": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "GT": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "HN": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MX": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "NI": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "PY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "SV": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "UY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "JP": [
        "H",
        "h",
        "K"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BO": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "EC": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "PE": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ]
};


function $7611572ea752152f$export$29c5368be8904d27(skeleton, locale) {
    var skeletonCopy = '';
    for(var patternPos = 0; patternPos < skeleton.length; patternPos++){
        var patternChar = skeleton.charAt(patternPos);
        if (patternChar === 'j') {
            var extraLength = 0;
            while(patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar){
                extraLength++;
                patternPos++;
            }
            var hourLen = 1 + (extraLength & 1);
            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            var dayPeriodChar = 'a';
            var hourChar = $7611572ea752152f$var$getDefaultHourSymbolFromLocale(locale);
            if (hourChar == 'H' || hourChar == 'k') dayPeriodLen = 0;
            while(dayPeriodLen-- > 0)skeletonCopy += dayPeriodChar;
            while(hourLen-- > 0)skeletonCopy = hourChar + skeletonCopy;
        } else if (patternChar === 'J') skeletonCopy += 'H';
        else skeletonCopy += patternChar;
    }
    return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */ function $7611572ea752152f$var$getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === undefined && // @ts-ignore hourCycle(s) is not identified yet
    locale.hourCycles && // @ts-ignore
    locale.hourCycles.length) // @ts-ignore
    hourCycle = locale.hourCycles[0];
    if (hourCycle) switch(hourCycle){
        case 'h24':
            return 'k';
        case 'h23':
            return 'H';
        case 'h12':
            return 'h';
        case 'h11':
            return 'K';
        default:
            throw new Error('Invalid hourCycle');
    }
    // TODO: Once hourCycle is fully supported remove the following with data generation
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== 'root') regionTag = locale.maximize().region;
    var hourCycles = (0, $070e66412f8f2803$export$a8c9209db4084317)[regionTag || ''] || (0, $070e66412f8f2803$export$a8c9209db4084317)[languageTag || ''] || (0, $070e66412f8f2803$export$a8c9209db4084317)["".concat(languageTag, "-001")] || (0, $070e66412f8f2803$export$a8c9209db4084317)['001'];
    return hourCycles[0];
}


var $2e22d4b7f4ae91f0$var$_a;
var $2e22d4b7f4ae91f0$var$SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat((0, $9667c2b9cf9fb3c7$export$523451f94304dd6c).source, "*"));
var $2e22d4b7f4ae91f0$var$SPACE_SEPARATOR_END_REGEX = new RegExp("".concat((0, $9667c2b9cf9fb3c7$export$523451f94304dd6c).source, "*$"));
function $2e22d4b7f4ae91f0$var$createLocation(start, end) {
    return {
        start: start,
        end: end
    };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var $2e22d4b7f4ae91f0$var$hasNativeStartsWith = !!String.prototype.startsWith;
var $2e22d4b7f4ae91f0$var$hasNativeFromCodePoint = !!String.fromCodePoint;
var $2e22d4b7f4ae91f0$var$hasNativeFromEntries = !!Object.fromEntries;
var $2e22d4b7f4ae91f0$var$hasNativeCodePointAt = !!String.prototype.codePointAt;
var $2e22d4b7f4ae91f0$var$hasTrimStart = !!String.prototype.trimStart;
var $2e22d4b7f4ae91f0$var$hasTrimEnd = !!String.prototype.trimEnd;
var $2e22d4b7f4ae91f0$var$hasNativeIsSafeInteger = !!Number.isSafeInteger;
var $2e22d4b7f4ae91f0$var$isSafeInteger = $2e22d4b7f4ae91f0$var$hasNativeIsSafeInteger ? Number.isSafeInteger : function(n) {
    return typeof n === 'number' && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 0x1fffffffffffff;
};
// IE11 does not support y and u.
var $2e22d4b7f4ae91f0$var$REGEX_SUPPORTS_U_AND_Y = true;
try {
    var $2e22d4b7f4ae91f0$var$re = $2e22d4b7f4ae91f0$var$RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */ $2e22d4b7f4ae91f0$var$REGEX_SUPPORTS_U_AND_Y = (($2e22d4b7f4ae91f0$var$_a = $2e22d4b7f4ae91f0$var$re.exec('a')) === null || $2e22d4b7f4ae91f0$var$_a === void 0 ? void 0 : $2e22d4b7f4ae91f0$var$_a[0]) === 'a';
} catch (_) {
    $2e22d4b7f4ae91f0$var$REGEX_SUPPORTS_U_AND_Y = false;
}
var $2e22d4b7f4ae91f0$var$startsWith = $2e22d4b7f4ae91f0$var$hasNativeStartsWith ? function startsWith(s, search, position) {
    return s.startsWith(search, position);
} : function startsWith(s, search, position) {
    return s.slice(position, position + search.length) === search;
};
var $2e22d4b7f4ae91f0$var$fromCodePoint = $2e22d4b7f4ae91f0$var$hasNativeFromCodePoint ? String.fromCodePoint : function fromCodePoint() {
    var codePoints = [];
    for(var _i = 0; _i < arguments.length; _i++)codePoints[_i] = arguments[_i];
    var elements = '';
    var length = codePoints.length;
    var i = 0;
    var code;
    while(length > i){
        code = codePoints[i++];
        if (code > 0x10ffff) throw RangeError(code + ' is not a valid code point');
        elements += code < 0x10000 ? String.fromCharCode(code) : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00);
    }
    return elements;
};
var $2e22d4b7f4ae91f0$var$fromEntries = // native
$2e22d4b7f4ae91f0$var$hasNativeFromEntries ? Object.fromEntries : function fromEntries(entries) {
    var obj = {};
    for(var _i = 0, entries_1 = entries; _i < entries_1.length; _i++){
        var _a = entries_1[_i], k = _a[0], v = _a[1];
        obj[k] = v;
    }
    return obj;
};
var $2e22d4b7f4ae91f0$var$codePointAt = $2e22d4b7f4ae91f0$var$hasNativeCodePointAt ? function codePointAt(s, index) {
    return s.codePointAt(index);
} : function codePointAt(s, index) {
    var size = s.length;
    if (index < 0 || index >= size) return undefined;
    var first = s.charCodeAt(index);
    var second;
    return first < 0xd800 || first > 0xdbff || index + 1 === size || (second = s.charCodeAt(index + 1)) < 0xdc00 || second > 0xdfff ? first : (first - 0xd800 << 10) + (second - 0xdc00) + 0x10000;
};
var $2e22d4b7f4ae91f0$var$trimStart = $2e22d4b7f4ae91f0$var$hasTrimStart ? function trimStart(s) {
    return s.trimStart();
} : function trimStart(s) {
    return s.replace($2e22d4b7f4ae91f0$var$SPACE_SEPARATOR_START_REGEX, '');
};
var $2e22d4b7f4ae91f0$var$trimEnd = $2e22d4b7f4ae91f0$var$hasTrimEnd ? function trimEnd(s) {
    return s.trimEnd();
} : function trimEnd(s) {
    return s.replace($2e22d4b7f4ae91f0$var$SPACE_SEPARATOR_END_REGEX, '');
};
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function $2e22d4b7f4ae91f0$var$RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var $2e22d4b7f4ae91f0$var$matchIdentifierAtIndex;
if ($2e22d4b7f4ae91f0$var$REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var $2e22d4b7f4ae91f0$var$IDENTIFIER_PREFIX_RE_1 = $2e22d4b7f4ae91f0$var$RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    $2e22d4b7f4ae91f0$var$matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        $2e22d4b7f4ae91f0$var$IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = $2e22d4b7f4ae91f0$var$IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
} else // IE11
$2e22d4b7f4ae91f0$var$matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
    var match = [];
    while(true){
        var c = $2e22d4b7f4ae91f0$var$codePointAt(s, index);
        if (c === undefined || $2e22d4b7f4ae91f0$var$_isWhiteSpace(c) || $2e22d4b7f4ae91f0$var$_isPatternSyntax(c)) break;
        match.push(c);
        index += c >= 0x10000 ? 2 : 1;
    }
    return $2e22d4b7f4ae91f0$var$fromCodePoint.apply(void 0, match);
};
var $2e22d4b7f4ae91f0$export$7acfa6ed01010e37 = /** @class */ function() {
    function Parser(message, options) {
        if (options === void 0) options = {};
        this.message = message;
        this.position = {
            offset: 0,
            line: 1,
            column: 1
        };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function() {
        if (this.offset() !== 0) throw Error('parser can only be used once');
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function(nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while(!this.isEOF()){
            var char = this.char();
            if (char === 123 /* `{` */ ) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) return result;
                elements.push(result.val);
            } else if (char === 125 /* `}` */  && nestingLevel > 0) break;
            else if (char === 35 /* `#` */  && (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: (0, $1aa47907aab6f291$export$b87f371cbc396fcf).pound,
                    location: $2e22d4b7f4ae91f0$var$createLocation(position, this.clonePosition())
                });
            } else if (char === 60 /* `<` */  && !this.ignoreTag && this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) break;
                else return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).UNMATCHED_CLOSING_TAG, $2e22d4b7f4ae91f0$var$createLocation(this.clonePosition(), this.clonePosition()));
            } else if (char === 60 /* `<` */  && !this.ignoreTag && $2e22d4b7f4ae91f0$var$_isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) return result;
                elements.push(result.val);
            } else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) return result;
                elements.push(result.val);
            }
        }
        return {
            val: elements,
            err: null
        };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */ Parser.prototype.parseTag = function(nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) // Self closing tag
        return {
            val: {
                type: (0, $1aa47907aab6f291$export$b87f371cbc396fcf).literal,
                value: "<".concat(tagName, "/>"),
                location: $2e22d4b7f4ae91f0$var$createLocation(startPosition, this.clonePosition())
            },
            err: null
        };
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) return childrenResult;
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !$2e22d4b7f4ae91f0$var$_isAlpha(this.char())) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).INVALID_TAG, $2e22d4b7f4ae91f0$var$createLocation(endTagStartPosition, this.clonePosition()));
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).UNMATCHED_CLOSING_TAG, $2e22d4b7f4ae91f0$var$createLocation(closingTagNameStartPosition, this.clonePosition()));
                this.bumpSpace();
                if (!this.bumpIf('>')) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).INVALID_TAG, $2e22d4b7f4ae91f0$var$createLocation(endTagStartPosition, this.clonePosition()));
                return {
                    val: {
                        type: (0, $1aa47907aab6f291$export$b87f371cbc396fcf).tag,
                        value: tagName,
                        children: children,
                        location: $2e22d4b7f4ae91f0$var$createLocation(startPosition, this.clonePosition())
                    },
                    err: null
                };
            } else return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).UNCLOSED_TAG, $2e22d4b7f4ae91f0$var$createLocation(startPosition, this.clonePosition()));
        } else return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).INVALID_TAG, $2e22d4b7f4ae91f0$var$createLocation(startPosition, this.clonePosition()));
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */ Parser.prototype.parseTagName = function() {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while(!this.isEOF() && $2e22d4b7f4ae91f0$var$_isPotentialElementNameChar(this.char()))this.bump();
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function(nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while(true){
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = $2e22d4b7f4ae91f0$var$createLocation(start, this.clonePosition());
        return {
            val: {
                type: (0, $1aa47907aab6f291$export$b87f371cbc396fcf).literal,
                value: value,
                location: location
            },
            err: null
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function() {
        if (!this.isEOF() && this.char() === 60 /* `<` */  && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
        !$2e22d4b7f4ae91f0$var$_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */ Parser.prototype.tryParseQuote = function(parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */ ) return null;
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch(this.peek()){
            case 39 /* `'` */ :
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35:
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') break;
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [
            this.char()
        ]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while(!this.isEOF()){
            var ch = this.char();
            if (ch === 39 /* `'` */ ) {
                if (this.peek() === 39 /* `'` */ ) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                } else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            } else codePoints.push(ch);
            this.bump();
        }
        return $2e22d4b7f4ae91f0$var$fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function(nestingLevel, parentArgType) {
        if (this.isEOF()) return null;
        var ch = this.char();
        if (ch === 60 /* `<` */  || ch === 123 /* `{` */  || ch === 35 /* `#` */  && (parentArgType === 'plural' || parentArgType === 'selectordinal') || ch === 125 /* `}` */  && nestingLevel > 0) return null;
        else {
            this.bump();
            return $2e22d4b7f4ae91f0$var$fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function(nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_ARGUMENT_CLOSING_BRACE, $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition()));
        if (this.char() === 125 /* `}` */ ) {
            this.bump();
            return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EMPTY_ARGUMENT, $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).MALFORMED_ARGUMENT, $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition()));
        this.bumpSpace();
        if (this.isEOF()) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_ARGUMENT_CLOSING_BRACE, $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition()));
        switch(this.char()){
            // Simple argument: `{name}`
            case 125 /* `}` */ :
                this.bump(); // `}`
                return {
                    val: {
                        type: (0, $1aa47907aab6f291$export$b87f371cbc396fcf).argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition())
                    },
                    err: null
                };
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */ :
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_ARGUMENT_CLOSING_BRACE, $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition()));
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            default:
                return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).MALFORMED_ARGUMENT, $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */ Parser.prototype.parseIdentifierIfPossible = function() {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = $2e22d4b7f4ae91f0$var$matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = $2e22d4b7f4ae91f0$var$createLocation(startingPosition, endPosition);
        return {
            value: value,
            location: location
        };
    };
    Parser.prototype.parseArgumentOptions = function(nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch(argType){
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_ARGUMENT_TYPE, $2e22d4b7f4ae91f0$var$createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time':
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) return result;
                    var style = $2e22d4b7f4ae91f0$var$trimEnd(result.val);
                    if (style.length === 0) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_ARGUMENT_STYLE, $2e22d4b7f4ae91f0$var$createLocation(this.clonePosition(), this.clonePosition()));
                    var styleLocation = $2e22d4b7f4ae91f0$var$createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = {
                        style: style,
                        styleLocation: styleLocation
                    };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) return argCloseResult;
                var location_1 = $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && $2e22d4b7f4ae91f0$var$startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = $2e22d4b7f4ae91f0$var$trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) return result;
                        return {
                            val: {
                                type: (0, $1aa47907aab6f291$export$b87f371cbc396fcf).number,
                                value: value,
                                location: location_1,
                                style: result.val
                            },
                            err: null
                        };
                    } else {
                        if (skeleton.length === 0) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_DATE_TIME_SKELETON, location_1);
                        var dateTimePattern = skeleton;
                        // Get "best match" pattern only if locale is passed, if not, let it
                        // pass as-is where `parseDateTimeSkeleton()` will throw an error
                        // for unsupported patterns.
                        if (this.locale) dateTimePattern = (0, $7611572ea752152f$export$29c5368be8904d27)(skeleton, this.locale);
                        var style = {
                            type: (0, $1aa47907aab6f291$export$906452485466fa53).dateTime,
                            pattern: dateTimePattern,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons ? (0, $0260c25359eac13a$export$f7b99fb377fe69fa)(dateTimePattern) : {}
                        };
                        var type = argType === 'date' ? (0, $1aa47907aab6f291$export$b87f371cbc396fcf).date : (0, $1aa47907aab6f291$export$b87f371cbc396fcf).time;
                        return {
                            val: {
                                type: type,
                                value: value,
                                location: location_1,
                                style: style
                            },
                            err: null
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number' ? (0, $1aa47907aab6f291$export$b87f371cbc396fcf).number : argType === 'date' ? (0, $1aa47907aab6f291$export$b87f371cbc396fcf).date : (0, $1aa47907aab6f291$export$b87f371cbc396fcf).time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null
                    },
                    err: null
                };
            case 'plural':
            case 'selectordinal':
            case 'select':
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_SELECT_ARGUMENT_OPTIONS, $2e22d4b7f4ae91f0$var$createLocation(typeEndPosition_1, (0, $24c52f343453d62d$export$18ce0697a983be9b)({}, typeEndPosition_1)));
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $2e22d4b7f4ae91f0$var$createLocation(this.clonePosition(), this.clonePosition()));
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, (0, $eef623724bdc3ca1$export$896afd8541959ee5).INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) return result;
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) return optionsResult;
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) return argCloseResult;
                var location_2 = $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') return {
                    val: {
                        type: (0, $1aa47907aab6f291$export$b87f371cbc396fcf).select,
                        value: value,
                        options: $2e22d4b7f4ae91f0$var$fromEntries(optionsResult.val),
                        location: location_2
                    },
                    err: null
                };
                else return {
                    val: {
                        type: (0, $1aa47907aab6f291$export$b87f371cbc396fcf).plural,
                        value: value,
                        options: $2e22d4b7f4ae91f0$var$fromEntries(optionsResult.val),
                        offset: pluralOffset,
                        pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                        location: location_2
                    },
                    err: null
                };
            default:
                return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).INVALID_ARGUMENT_TYPE, $2e22d4b7f4ae91f0$var$createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function(openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */ ) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_ARGUMENT_CLOSING_BRACE, $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition()));
        this.bump(); // `}`
        return {
            val: true,
            err: null
        };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */ Parser.prototype.parseSimpleArgStyleIfPossible = function() {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while(!this.isEOF()){
            var ch = this.char();
            switch(ch){
                case 39 /* `'` */ :
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, $2e22d4b7f4ae91f0$var$createLocation(apostrophePosition, this.clonePosition()));
                    this.bump();
                    break;
                case 123 /* `{` */ :
                    nestedBraces += 1;
                    this.bump();
                    break;
                case 125 /* `}` */ :
                    if (nestedBraces > 0) nestedBraces -= 1;
                    else return {
                        val: this.message.slice(startPosition.offset, this.offset()),
                        err: null
                    };
                    break;
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function(skeleton, location) {
        var tokens = [];
        try {
            tokens = (0, $7b45dedea56560e9$export$71cee2f16fba2480)(skeleton);
        } catch (e) {
            return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: (0, $1aa47907aab6f291$export$906452485466fa53).number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons ? (0, $7b45dedea56560e9$export$47c6f8480bda3e11)(tokens) : {}
            },
            err: null
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */ Parser.prototype.tryParsePluralOrSelectOptions = function(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while(true){
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger((0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_PLURAL_ARGUMENT_SELECTOR, (0, $eef623724bdc3ca1$export$896afd8541959ee5).INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) return result;
                    selectorLocation = $2e22d4b7f4ae91f0$var$createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                } else break;
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) return this.error(parentArgType === 'select' ? (0, $eef623724bdc3ca1$export$896afd8541959ee5).DUPLICATE_SELECT_ARGUMENT_SELECTOR : (0, $eef623724bdc3ca1$export$896afd8541959ee5).DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            if (selector === 'other') hasOtherClause = true;
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) return this.error(parentArgType === 'select' ? (0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : (0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, $2e22d4b7f4ae91f0$var$createLocation(this.clonePosition(), this.clonePosition()));
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) return fragmentResult;
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) return argCloseResult;
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: $2e22d4b7f4ae91f0$var$createLocation(openingBracePosition, this.clonePosition())
                }
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            _a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location;
        }
        if (options.length === 0) return this.error(parentArgType === 'select' ? (0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_SELECT_ARGUMENT_SELECTOR : (0, $eef623724bdc3ca1$export$896afd8541959ee5).EXPECT_PLURAL_ARGUMENT_SELECTOR, $2e22d4b7f4ae91f0$var$createLocation(this.clonePosition(), this.clonePosition()));
        if (this.requiresOtherClause && !hasOtherClause) return this.error((0, $eef623724bdc3ca1$export$896afd8541959ee5).MISSING_OTHER_CLAUSE, $2e22d4b7f4ae91f0$var$createLocation(this.clonePosition(), this.clonePosition()));
        return {
            val: options,
            err: null
        };
    };
    Parser.prototype.tryParseDecimalInteger = function(expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) ;
        else if (this.bumpIf('-')) sign = -1;
        var hasDigits = false;
        var decimal = 0;
        while(!this.isEOF()){
            var ch = this.char();
            if (ch >= 48 /* `0` */  && ch <= 57 /* `9` */ ) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            } else break;
        }
        var location = $2e22d4b7f4ae91f0$var$createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) return this.error(expectNumberError, location);
        decimal *= sign;
        if (!$2e22d4b7f4ae91f0$var$isSafeInteger(decimal)) return this.error(invalidNumberError, location);
        return {
            val: decimal,
            err: null
        };
    };
    Parser.prototype.offset = function() {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function() {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function() {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */ Parser.prototype.char = function() {
        var offset = this.position.offset;
        if (offset >= this.message.length) throw Error('out of bound');
        var code = $2e22d4b7f4ae91f0$var$codePointAt(this.message, offset);
        if (code === undefined) throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        return code;
    };
    Parser.prototype.error = function(kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location
            }
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */ Parser.prototype.bump = function() {
        if (this.isEOF()) return;
        var code = this.char();
        if (code === 10 /* '\n' */ ) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        } else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */ Parser.prototype.bumpIf = function(prefix) {
        if ($2e22d4b7f4ae91f0$var$startsWith(this.message, prefix, this.offset())) {
            for(var i = 0; i < prefix.length; i++)this.bump();
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */ Parser.prototype.bumpUntil = function(pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        } else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */ Parser.prototype.bumpTo = function(targetOffset) {
        if (this.offset() > targetOffset) throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        targetOffset = Math.min(targetOffset, this.message.length);
        while(true){
            var offset = this.offset();
            if (offset === targetOffset) break;
            if (offset > targetOffset) throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            this.bump();
            if (this.isEOF()) break;
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */ Parser.prototype.bumpSpace = function() {
        while(!this.isEOF() && $2e22d4b7f4ae91f0$var$_isWhiteSpace(this.char()))this.bump();
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */ Parser.prototype.peek = function() {
        if (this.isEOF()) return null;
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}();
/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */ function $2e22d4b7f4ae91f0$var$_isAlpha(codepoint) {
    return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function $2e22d4b7f4ae91f0$var$_isAlphaOrSlash(codepoint) {
    return $2e22d4b7f4ae91f0$var$_isAlpha(codepoint) || codepoint === 47; /* '/' */ 
}
/** See `parseTag` function docs. */ function $2e22d4b7f4ae91f0$var$_isPotentialElementNameChar(c) {
    return c === 45 /* '-' */  || c === 46 /* '.' */  || c >= 48 && c <= 57 || c === 95 /* '_' */  || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 0xb7 || c >= 0xc0 && c <= 0xd6 || c >= 0xd8 && c <= 0xf6 || c >= 0xf8 && c <= 0x37d || c >= 0x37f && c <= 0x1fff || c >= 0x200c && c <= 0x200d || c >= 0x203f && c <= 0x2040 || c >= 0x2070 && c <= 0x218f || c >= 0x2c00 && c <= 0x2fef || c >= 0x3001 && c <= 0xd7ff || c >= 0xf900 && c <= 0xfdcf || c >= 0xfdf0 && c <= 0xfffd || c >= 0x10000 && c <= 0xeffff;
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */ function $2e22d4b7f4ae91f0$var$_isWhiteSpace(c) {
    return c >= 0x0009 && c <= 0x000d || c === 0x0020 || c === 0x0085 || c >= 0x200e && c <= 0x200f || c === 0x2028 || c === 0x2029;
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */ function $2e22d4b7f4ae91f0$var$_isPatternSyntax(c) {
    return c >= 0x0021 && c <= 0x0023 || c === 0x0024 || c >= 0x0025 && c <= 0x0027 || c === 0x0028 || c === 0x0029 || c === 0x002a || c === 0x002b || c === 0x002c || c === 0x002d || c >= 0x002e && c <= 0x002f || c >= 0x003a && c <= 0x003b || c >= 0x003c && c <= 0x003e || c >= 0x003f && c <= 0x0040 || c === 0x005b || c === 0x005c || c === 0x005d || c === 0x005e || c === 0x0060 || c === 0x007b || c === 0x007c || c === 0x007d || c === 0x007e || c === 0x00a1 || c >= 0x00a2 && c <= 0x00a5 || c === 0x00a6 || c === 0x00a7 || c === 0x00a9 || c === 0x00ab || c === 0x00ac || c === 0x00ae || c === 0x00b0 || c === 0x00b1 || c === 0x00b6 || c === 0x00bb || c === 0x00bf || c === 0x00d7 || c === 0x00f7 || c >= 0x2010 && c <= 0x2015 || c >= 0x2016 && c <= 0x2017 || c === 0x2018 || c === 0x2019 || c === 0x201a || c >= 0x201b && c <= 0x201c || c === 0x201d || c === 0x201e || c === 0x201f || c >= 0x2020 && c <= 0x2027 || c >= 0x2030 && c <= 0x2038 || c === 0x2039 || c === 0x203a || c >= 0x203b && c <= 0x203e || c >= 0x2041 && c <= 0x2043 || c === 0x2044 || c === 0x2045 || c === 0x2046 || c >= 0x2047 && c <= 0x2051 || c === 0x2052 || c === 0x2053 || c >= 0x2055 && c <= 0x205e || c >= 0x2190 && c <= 0x2194 || c >= 0x2195 && c <= 0x2199 || c >= 0x219a && c <= 0x219b || c >= 0x219c && c <= 0x219f || c === 0x21a0 || c >= 0x21a1 && c <= 0x21a2 || c === 0x21a3 || c >= 0x21a4 && c <= 0x21a5 || c === 0x21a6 || c >= 0x21a7 && c <= 0x21ad || c === 0x21ae || c >= 0x21af && c <= 0x21cd || c >= 0x21ce && c <= 0x21cf || c >= 0x21d0 && c <= 0x21d1 || c === 0x21d2 || c === 0x21d3 || c === 0x21d4 || c >= 0x21d5 && c <= 0x21f3 || c >= 0x21f4 && c <= 0x22ff || c >= 0x2300 && c <= 0x2307 || c === 0x2308 || c === 0x2309 || c === 0x230a || c === 0x230b || c >= 0x230c && c <= 0x231f || c >= 0x2320 && c <= 0x2321 || c >= 0x2322 && c <= 0x2328 || c === 0x2329 || c === 0x232a || c >= 0x232b && c <= 0x237b || c === 0x237c || c >= 0x237d && c <= 0x239a || c >= 0x239b && c <= 0x23b3 || c >= 0x23b4 && c <= 0x23db || c >= 0x23dc && c <= 0x23e1 || c >= 0x23e2 && c <= 0x2426 || c >= 0x2427 && c <= 0x243f || c >= 0x2440 && c <= 0x244a || c >= 0x244b && c <= 0x245f || c >= 0x2500 && c <= 0x25b6 || c === 0x25b7 || c >= 0x25b8 && c <= 0x25c0 || c === 0x25c1 || c >= 0x25c2 && c <= 0x25f7 || c >= 0x25f8 && c <= 0x25ff || c >= 0x2600 && c <= 0x266e || c === 0x266f || c >= 0x2670 && c <= 0x2767 || c === 0x2768 || c === 0x2769 || c === 0x276a || c === 0x276b || c === 0x276c || c === 0x276d || c === 0x276e || c === 0x276f || c === 0x2770 || c === 0x2771 || c === 0x2772 || c === 0x2773 || c === 0x2774 || c === 0x2775 || c >= 0x2794 && c <= 0x27bf || c >= 0x27c0 && c <= 0x27c4 || c === 0x27c5 || c === 0x27c6 || c >= 0x27c7 && c <= 0x27e5 || c === 0x27e6 || c === 0x27e7 || c === 0x27e8 || c === 0x27e9 || c === 0x27ea || c === 0x27eb || c === 0x27ec || c === 0x27ed || c === 0x27ee || c === 0x27ef || c >= 0x27f0 && c <= 0x27ff || c >= 0x2800 && c <= 0x28ff || c >= 0x2900 && c <= 0x2982 || c === 0x2983 || c === 0x2984 || c === 0x2985 || c === 0x2986 || c === 0x2987 || c === 0x2988 || c === 0x2989 || c === 0x298a || c === 0x298b || c === 0x298c || c === 0x298d || c === 0x298e || c === 0x298f || c === 0x2990 || c === 0x2991 || c === 0x2992 || c === 0x2993 || c === 0x2994 || c === 0x2995 || c === 0x2996 || c === 0x2997 || c === 0x2998 || c >= 0x2999 && c <= 0x29d7 || c === 0x29d8 || c === 0x29d9 || c === 0x29da || c === 0x29db || c >= 0x29dc && c <= 0x29fb || c === 0x29fc || c === 0x29fd || c >= 0x29fe && c <= 0x2aff || c >= 0x2b00 && c <= 0x2b2f || c >= 0x2b30 && c <= 0x2b44 || c >= 0x2b45 && c <= 0x2b46 || c >= 0x2b47 && c <= 0x2b4c || c >= 0x2b4d && c <= 0x2b73 || c >= 0x2b74 && c <= 0x2b75 || c >= 0x2b76 && c <= 0x2b95 || c === 0x2b96 || c >= 0x2b97 && c <= 0x2bff || c >= 0x2e00 && c <= 0x2e01 || c === 0x2e02 || c === 0x2e03 || c === 0x2e04 || c === 0x2e05 || c >= 0x2e06 && c <= 0x2e08 || c === 0x2e09 || c === 0x2e0a || c === 0x2e0b || c === 0x2e0c || c === 0x2e0d || c >= 0x2e0e && c <= 0x2e16 || c === 0x2e17 || c >= 0x2e18 && c <= 0x2e19 || c === 0x2e1a || c === 0x2e1b || c === 0x2e1c || c === 0x2e1d || c >= 0x2e1e && c <= 0x2e1f || c === 0x2e20 || c === 0x2e21 || c === 0x2e22 || c === 0x2e23 || c === 0x2e24 || c === 0x2e25 || c === 0x2e26 || c === 0x2e27 || c === 0x2e28 || c === 0x2e29 || c >= 0x2e2a && c <= 0x2e2e || c === 0x2e2f || c >= 0x2e30 && c <= 0x2e39 || c >= 0x2e3a && c <= 0x2e3b || c >= 0x2e3c && c <= 0x2e3f || c === 0x2e40 || c === 0x2e41 || c === 0x2e42 || c >= 0x2e43 && c <= 0x2e4f || c >= 0x2e50 && c <= 0x2e51 || c === 0x2e52 || c >= 0x2e53 && c <= 0x2e7f || c >= 0x3001 && c <= 0x3003 || c === 0x3008 || c === 0x3009 || c === 0x300a || c === 0x300b || c === 0x300c || c === 0x300d || c === 0x300e || c === 0x300f || c === 0x3010 || c === 0x3011 || c >= 0x3012 && c <= 0x3013 || c === 0x3014 || c === 0x3015 || c === 0x3016 || c === 0x3017 || c === 0x3018 || c === 0x3019 || c === 0x301a || c === 0x301b || c === 0x301c || c === 0x301d || c >= 0x301e && c <= 0x301f || c === 0x3020 || c === 0x3030 || c === 0xfd3e || c === 0xfd3f || c >= 0xfe45 && c <= 0xfe46;
}



function $16aea0bc45fda6eb$var$pruneLocation(els) {
    els.forEach(function(el) {
        delete el.location;
        if ((0, $1aa47907aab6f291$export$dcfe1c11d168b5a1)(el) || (0, $1aa47907aab6f291$export$6c796d116f0a4fbc)(el)) for(var k in el.options){
            delete el.options[k].location;
            $16aea0bc45fda6eb$var$pruneLocation(el.options[k].value);
        }
        else if ((0, $1aa47907aab6f291$export$e11187b219e191e1)(el) && (0, $1aa47907aab6f291$export$3f9a19cd4152eda3)(el.style)) delete el.style.location;
        else if (((0, $1aa47907aab6f291$export$32d811605da75f40)(el) || (0, $1aa47907aab6f291$export$34ec46f596b1702f)(el)) && (0, $1aa47907aab6f291$export$7680c41f1a55f4cf)(el.style)) delete el.style.location;
        else if ((0, $1aa47907aab6f291$export$5c83de34745812b)(el)) $16aea0bc45fda6eb$var$pruneLocation(el.children);
    });
}
function $16aea0bc45fda6eb$export$98e6a39c04603d36(message, opts) {
    if (opts === void 0) opts = {};
    opts = (0, $24c52f343453d62d$export$18ce0697a983be9b)({
        shouldParseSkeletons: true,
        requiresOtherClause: true
    }, opts);
    var result = new (0, $2e22d4b7f4ae91f0$export$7acfa6ed01010e37)(message, opts).parse();
    if (result.err) {
        var error = SyntaxError((0, $eef623724bdc3ca1$export$896afd8541959ee5)[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) $16aea0bc45fda6eb$var$pruneLocation(result.val);
    return result.val;
}


//
// Main
//
function $88996934bc7eac41$export$2e2bcd8739ae039(fn, options) {
    var cache = options && options.cache ? options.cache : $88996934bc7eac41$var$cacheDefault;
    var serializer = options && options.serializer ? options.serializer : $88996934bc7eac41$var$serializerDefault;
    var strategy = options && options.strategy ? options.strategy : $88996934bc7eac41$var$strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer
    });
}
//
// Strategy
//
function $88996934bc7eac41$var$isPrimitive(value) {
    return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}
function $88996934bc7eac41$var$monadic(fn, cache, serializer, arg) {
    var cacheKey = $88996934bc7eac41$var$isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function $88996934bc7eac41$var$variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function $88996934bc7eac41$var$assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function $88996934bc7eac41$var$strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? $88996934bc7eac41$var$monadic : $88996934bc7eac41$var$variadic;
    return $88996934bc7eac41$var$assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function $88996934bc7eac41$var$strategyVariadic(fn, options) {
    return $88996934bc7eac41$var$assemble(fn, this, $88996934bc7eac41$var$variadic, options.cache.create(), options.serializer);
}
function $88996934bc7eac41$var$strategyMonadic(fn, options) {
    return $88996934bc7eac41$var$assemble(fn, this, $88996934bc7eac41$var$monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var $88996934bc7eac41$var$serializerDefault = function() {
    return JSON.stringify(arguments);
};
//
// Cache
//
function $88996934bc7eac41$var$ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
$88996934bc7eac41$var$ObjectWithoutPrototypeCache.prototype.get = function(key) {
    return this.cache[key];
};
$88996934bc7eac41$var$ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
    this.cache[key] = value;
};
var $88996934bc7eac41$var$cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new $88996934bc7eac41$var$ObjectWithoutPrototypeCache();
    }
};
var $88996934bc7eac41$export$c5491a8691a23b9e = {
    variadic: $88996934bc7eac41$var$strategyVariadic,
    monadic: $88996934bc7eac41$var$strategyMonadic
};




var $25beef5be29eda28$export$d4e71bc0b80dc0fb;
(function(ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})($25beef5be29eda28$export$d4e71bc0b80dc0fb || ($25beef5be29eda28$export$d4e71bc0b80dc0fb = {}));
var $25beef5be29eda28$export$7369836851cc1329 = /** @class */ function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function() {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error);
var $25beef5be29eda28$export$565c3afc07dfa382 = /** @class */ function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), $25beef5be29eda28$export$d4e71bc0b80dc0fb.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}($25beef5be29eda28$export$7369836851cc1329);
var $25beef5be29eda28$export$cbc0db47c750f7c9 = /** @class */ function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), $25beef5be29eda28$export$d4e71bc0b80dc0fb.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}($25beef5be29eda28$export$7369836851cc1329);
var $25beef5be29eda28$export$8bfc137e4d23fdf0 = /** @class */ function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), $25beef5be29eda28$export$d4e71bc0b80dc0fb.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}($25beef5be29eda28$export$7369836851cc1329);


var $d2836f1e9490df05$export$49694c2877b44c57;
(function(PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})($d2836f1e9490df05$export$49694c2877b44c57 || ($d2836f1e9490df05$export$49694c2877b44c57 = {}));
function $d2836f1e9490df05$var$mergeLiteral(parts) {
    if (parts.length < 2) return parts;
    return parts.reduce(function(all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart || lastPart.type !== $d2836f1e9490df05$export$49694c2877b44c57.literal || part.type !== $d2836f1e9490df05$export$49694c2877b44c57.literal) all.push(part);
        else lastPart.value += part.value;
        return all;
    }, []);
}
function $d2836f1e9490df05$export$df0c12a2d414a163(el) {
    return typeof el === 'function';
}
function $d2836f1e9490df05$export$275d4a3bb5f66fda(els, locales, formatters, formats, values, currentPluralValue, // For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && (0, $1aa47907aab6f291$export$cfa10c5697238752)(els[0])) return [
        {
            type: $d2836f1e9490df05$export$49694c2877b44c57.literal,
            value: els[0].value
        }
    ];
    var result = [];
    for(var _i = 0, els_1 = els; _i < els_1.length; _i++){
        var el = els_1[_i];
        // Exit early for string parts.
        if ((0, $1aa47907aab6f291$export$cfa10c5697238752)(el)) {
            result.push({
                type: $d2836f1e9490df05$export$49694c2877b44c57.literal,
                value: el.value
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if ((0, $1aa47907aab6f291$export$c0ece297bdd0c082)(el)) {
            if (typeof currentPluralValue === 'number') result.push({
                type: $d2836f1e9490df05$export$49694c2877b44c57.literal,
                value: formatters.getNumberFormat(locales).format(currentPluralValue)
            });
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) throw new (0, $25beef5be29eda28$export$8bfc137e4d23fdf0)(varName, originalMessage);
        var value = values[varName];
        if ((0, $1aa47907aab6f291$export$4f55724281bdfaf9)(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') value = typeof value === 'string' || typeof value === 'number' ? String(value) : '';
            result.push({
                type: typeof value === 'string' ? $d2836f1e9490df05$export$49694c2877b44c57.literal : $d2836f1e9490df05$export$49694c2877b44c57.object,
                value: value
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if ((0, $1aa47907aab6f291$export$32d811605da75f40)(el)) {
            var style = typeof el.style === 'string' ? formats.date[el.style] : (0, $1aa47907aab6f291$export$7680c41f1a55f4cf)(el.style) ? el.style.parsedOptions : undefined;
            result.push({
                type: $d2836f1e9490df05$export$49694c2877b44c57.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, $1aa47907aab6f291$export$34ec46f596b1702f)(el)) {
            var style = typeof el.style === 'string' ? formats.time[el.style] : (0, $1aa47907aab6f291$export$7680c41f1a55f4cf)(el.style) ? el.style.parsedOptions : formats.time.medium;
            result.push({
                type: $d2836f1e9490df05$export$49694c2877b44c57.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, $1aa47907aab6f291$export$e11187b219e191e1)(el)) {
            var style = typeof el.style === 'string' ? formats.number[el.style] : (0, $1aa47907aab6f291$export$3f9a19cd4152eda3)(el.style) ? el.style.parsedOptions : undefined;
            if (style && style.scale) value = value * (style.scale || 1);
            result.push({
                type: $d2836f1e9490df05$export$49694c2877b44c57.literal,
                value: formatters.getNumberFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, $1aa47907aab6f291$export$5c83de34745812b)(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!$d2836f1e9490df05$export$df0c12a2d414a163(formatFn)) throw new (0, $25beef5be29eda28$export$cbc0db47c750f7c9)(value_1, 'function', originalMessage);
            var parts = $d2836f1e9490df05$export$275d4a3bb5f66fda(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function(p) {
                return p.value;
            }));
            if (!Array.isArray(chunks)) chunks = [
                chunks
            ];
            result.push.apply(result, chunks.map(function(c) {
                return {
                    type: typeof c === 'string' ? $d2836f1e9490df05$export$49694c2877b44c57.literal : $d2836f1e9490df05$export$49694c2877b44c57.object,
                    value: c
                };
            }));
        }
        if ((0, $1aa47907aab6f291$export$dcfe1c11d168b5a1)(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) throw new (0, $25beef5be29eda28$export$565c3afc07dfa382)(el.value, value, Object.keys(el.options), originalMessage);
            result.push.apply(result, $d2836f1e9490df05$export$275d4a3bb5f66fda(opt.value, locales, formatters, formats, values));
            continue;
        }
        if ((0, $1aa47907aab6f291$export$6c796d116f0a4fbc)(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) throw new (0, $25beef5be29eda28$export$7369836851cc1329)("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", (0, $25beef5be29eda28$export$d4e71bc0b80dc0fb).MISSING_INTL_API, originalMessage);
                var rule = formatters.getPluralRules(locales, {
                    type: el.pluralType
                }).select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) throw new (0, $25beef5be29eda28$export$565c3afc07dfa382)(el.value, value, Object.keys(el.options), originalMessage);
            result.push.apply(result, $d2836f1e9490df05$export$275d4a3bb5f66fda(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return $d2836f1e9490df05$var$mergeLiteral(result);
}


// -- MessageFormat --------------------------------------------------------
function $53500c0521fd7731$var$mergeConfig(c1, c2) {
    if (!c2) return c1;
    return (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k) {
        all[k] = (0, $24c52f343453d62d$export$18ce0697a983be9b)((0, $24c52f343453d62d$export$18ce0697a983be9b)({}, c1[k]), c2[k] || {});
        return all;
    }, {}));
}
function $53500c0521fd7731$var$mergeConfigs(defaultConfig, configs) {
    if (!configs) return defaultConfig;
    return Object.keys(defaultConfig).reduce(function(all, k) {
        all[k] = $53500c0521fd7731$var$mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, (0, $24c52f343453d62d$export$18ce0697a983be9b)({}, defaultConfig));
}
function $53500c0521fd7731$var$createFastMemoizeCache(store) {
    return {
        create: function() {
            return {
                get: function(key) {
                    return store[key];
                },
                set: function(key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function $53500c0521fd7731$var$createDefaultFormatters(cache) {
    if (cache === void 0) cache = {
        number: {},
        dateTime: {},
        pluralRules: {}
    };
    return {
        getNumberFormat: (0, $88996934bc7eac41$export$2e2bcd8739ae039)(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return new ((_a = Intl.NumberFormat).bind.apply(_a, (0, $24c52f343453d62d$export$1216008129fb82ed)([
                void 0
            ], args, false)))();
        }, {
            cache: $53500c0521fd7731$var$createFastMemoizeCache(cache.number),
            strategy: (0, $88996934bc7eac41$export$c5491a8691a23b9e).variadic
        }),
        getDateTimeFormat: (0, $88996934bc7eac41$export$2e2bcd8739ae039)(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0, $24c52f343453d62d$export$1216008129fb82ed)([
                void 0
            ], args, false)))();
        }, {
            cache: $53500c0521fd7731$var$createFastMemoizeCache(cache.dateTime),
            strategy: (0, $88996934bc7eac41$export$c5491a8691a23b9e).variadic
        }),
        getPluralRules: (0, $88996934bc7eac41$export$2e2bcd8739ae039)(function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return new ((_a = Intl.PluralRules).bind.apply(_a, (0, $24c52f343453d62d$export$1216008129fb82ed)([
                void 0
            ], args, false)))();
        }, {
            cache: $53500c0521fd7731$var$createFastMemoizeCache(cache.pluralRules),
            strategy: (0, $88996934bc7eac41$export$c5491a8691a23b9e).variadic
        })
    };
}
var $53500c0521fd7731$export$d342343268debc40 = /** @class */ function() {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) locales = IntlMessageFormat.defaultLocale;
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
        this.format = function(values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) return parts[0].value;
            var result = parts.reduce(function(all, part) {
                if (!all.length || part.type !== (0, $d2836f1e9490df05$export$49694c2877b44c57).literal || typeof all[all.length - 1] !== 'string') all.push(part.value);
                else all[all.length - 1] += part.value;
                return all;
            }, []);
            if (result.length <= 1) return result[0] || '';
            return result;
        };
        this.formatToParts = function(values) {
            return (0, $d2836f1e9490df05$export$275d4a3bb5f66fda)(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function() {
            return {
                locale: _this.resolvedLocale.toString()
            };
        };
        this.getAst = function() {
            return _this.ast;
        };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
                locale: this.resolvedLocale
            });
        } else this.ast = message;
        if (!Array.isArray(this.ast)) throw new TypeError('A message must be provided as a String or AST.');
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = $53500c0521fd7731$var$mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters = opts && opts.formatters || $53500c0521fd7731$var$createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function() {
            if (!IntlMessageFormat.memoizedDefaultLocale) IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function(locales) {
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) return new Intl.Locale(supportedLocales[0]);
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = (0, $16aea0bc45fda6eb$export$98e6a39c04603d36);
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0
            },
            currency: {
                style: 'currency'
            },
            percent: {
                style: 'percent'
            }
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit'
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric'
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            }
        }
    };
    return IntlMessageFormat;
}();


var $138ab2dedf27a005$exports = {};
$138ab2dedf27a005$exports = JSON.parse('{"editor":{"show_percent":{"label":"Zobrazit procenta","description":"ZObrazit zb\xfdvaj\xedc\xed procenta vedle indik\xe1toru stavu"},"black_as_white":{"label":"ZObrazit \u010Dernou jako b\xedlou","description":"Zobrazit \xfarove\u0148 \u010Dern\xe9ho toneru b\xedlou barvou"}}}');


var $9a28a77a5af263d9$exports = {};
$9a28a77a5af263d9$exports = JSON.parse("{\"editor\":{\"show_percent\":{\"label\":\"Show percent value\",\"description\":\"Show percent value next to the progress bar\"},\"black_as_white\":{\"label\":\"Display black as white\",\"description\":\"Display black toner level as white\"}}}");


const $405177f8a3c8228b$var$languages = {
    cs: $138ab2dedf27a005$exports,
    en: $9a28a77a5af263d9$exports
};
const $405177f8a3c8228b$var$DEFAULT_LANG = "en";
function $405177f8a3c8228b$var$getTranslatedString(key, lang) {
    try {
        return key.split(".").reduce((o, i)=>o[i], $405177f8a3c8228b$var$languages[lang]);
    } catch (_) {
        return undefined;
    }
}
function $405177f8a3c8228b$export$2e2bcd8739ae039(hass) {
    return function(key, argObject = {}) {
        const lang = hass?.locale.language ?? $405177f8a3c8228b$var$DEFAULT_LANG;
        let translated = $405177f8a3c8228b$var$getTranslatedString(key, lang);
        if (!translated) translated = $405177f8a3c8228b$var$getTranslatedString(key, $405177f8a3c8228b$var$DEFAULT_LANG);
        if (!translated) return key;
        try {
            const translatedMessage = new (0, $53500c0521fd7731$export$d342343268debc40)(translated, lang);
            return translatedMessage.format(argObject);
        } catch (e) {
            console.error(`Error formatting message for key "${key}" with lang "${lang}":`, e);
            return translated;
        }
    };
}


class $ab1e9a80a63d61c0$export$c1848697bed418fe extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    setConfig(config) {
        this.config = {
            ...config
        };
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
            .option {margin-bottom: 12px;}
            label {font-size: 1em; margin-left: 0.5em;}
        `;
    }
    getBoolConfigVal(key, defaultValue) {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }
    render() {
        const customLocalize = (0, $405177f8a3c8228b$export$2e2bcd8739ae039)(this.hass);
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-settings-row>
                <span slot="heading" data-for="show_percent">${customLocalize("editor.show_percent.label")}</span>
                <span slot="description" data-for="show_percent">${customLocalize("editor.show_percent.description")}</span>
                <ha-switch
                    id="show_percent" 
                    @change=${this._onShowPercentChange}
                    .checked=${this.getBoolConfigVal("show_percent", true)} 
                    name="show_percent"
                ></ha-switch>
            </ha-settings-row>
            <ha-settings-row>
                <span slot="heading" data-for="show_percent">${customLocalize("editor.black_as_white.label")}</span>
                <span slot="description" data-for="show_percent">${customLocalize("editor.black_as_white.description")}</span>
                <ha-switch
                    id="black_as_white" 
                    @change=${this._onBlackAsWhiteChange}
                    .checked=${this.getBoolConfigVal("black_as_white", true)} 
                    name="black_as_white"
                ></ha-switch>
            </ha-settings-row>
		`;
    }
    _onShowPercentChange(e) {
        const checked = e.target.checked;
        this._updateConfig({
            ...this.config,
            show_percent: checked
        });
    }
    _onBlackAsWhiteChange(e) {
        const checked = e.target.checked;
        this._updateConfig({
            ...this.config,
            black_as_white: checked
        });
    }
    _updateConfig(newConfig) {
        this.config = newConfig;
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: {
                config: this.config
            },
            bubbles: true,
            composed: true
        }));
    }
    constructor(...args){
        super(...args), this.config = {};
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $ab1e9a80a63d61c0$export$c1848697bed418fe.prototype, "hass", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Object
    })
], $ab1e9a80a63d61c0$export$c1848697bed418fe.prototype, "config", void 0);
$ab1e9a80a63d61c0$export$c1848697bed418fe = (0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $14742f68afc766d6$export$da64fc29f17f9d0e)("printer-toner-level-feature-config")
], $ab1e9a80a63d61c0$export$c1848697bed418fe);


const $80165e74d4d272a0$var$supportsPrinterTonerLevelFeature = (stateObj)=>{
    return stateObj.attributes?.domain === "printer" && typeof stateObj.attributes?.black_level === "number";
};
class $80165e74d4d272a0$var$PrinterTonerLevelFeature extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            hass: {
                type: Object
            },
            config: {
                type: Object
            },
            stateObj: {
                type: Object
            }
        };
    }
    static getConfigElement() {
        return document.createElement('printer-toner-level-feature-config');
    }
    static getStubConfig() {
        return {
            type: 'printer-toner-level-feature'
        };
    }
    get isColorPrinter() {
        return this.stateObj?.attributes?.cyan_level != null;
    }
    getCardSize() {
        return this.isColorPrinter ? 3 : 2;
    }
    setConfig(config) {
        console.log(config);
        this.config = config;
        if (config && config.entity) this.stateObj = this.hass?.states?.[config.entity];
        else this.stateObj = undefined;
    }
    getBoolConfigVal(key, defaultValue) {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }
    set hass(hass) {
        this._hass = hass;
        if (this.config && this.config.entity) this.stateObj = hass?.states?.[this.config.entity];
    }
    get hass() {
        return this._hass;
    }
    render() {
        if (!this.config || !this.hass || !this.stateObj || !$80165e74d4d272a0$var$supportsPrinterTonerLevelFeature(this.stateObj)) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <div class="toners">
          <div>Unsupported feature</div>
        </div>
      `;
        const attributes = this.stateObj.attributes;
        const blackAsWhite = this.getBoolConfigVal("black_as_white", true);
        if (this.isColorPrinter) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <div class="color toners${blackAsWhite ? ' black-as-white' : ''}">
          ${this.renderToner("cyan")}
          ${this.renderToner("magenta")}
          ${this.renderToner("yellow")}
          ${this.renderToner("black")}
        </div>
      `;
        else return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <div class="toners${blackAsWhite ? ' black-as-white' : ''}">
          ${this.renderToner("black")}
        </div>
      `;
    }
    renderToner(color) {
        const level = this.stateObj.attributes[color + "_level"];
        const showPercent = this.getBoolConfigVal("show_percent", true);
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="${color} toner">
        <div class="background">
          <div class="level" style="width: ${level}%;"></div>
        </div>
        ${showPercent ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="percent">${level}</div>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
      </div>
    `;
    }
    static get styles() {
        return 0, $3b5ddbac5a56879d$export$80c40bf24173ffb7;
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $80165e74d4d272a0$var$PrinterTonerLevelFeature.prototype, "_hass", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $80165e74d4d272a0$var$PrinterTonerLevelFeature.prototype, "config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $80165e74d4d272a0$var$PrinterTonerLevelFeature.prototype, "stateObj", void 0);
$80165e74d4d272a0$var$PrinterTonerLevelFeature = (0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $14742f68afc766d6$export$da64fc29f17f9d0e)("printer-toner-level-feature")
], $80165e74d4d272a0$var$PrinterTonerLevelFeature);
window.customCardFeatures ||= [];
window.customCardFeatures.push({
    type: "printer-toner-level-feature",
    name: "Printer toner level",
    supported: $80165e74d4d272a0$var$supportsPrinterTonerLevelFeature,
    configurable: true
});


//# sourceMappingURL=printer-toner-level-feature.js.map
