function createMultiMethod() {
  const methods = {};

  const multiMethod = (...args) => {
    const key = args.join(" ");
    if (key in methods) {
      return methods[key](...args);
    }
    if ("*" in methods) {
      return methods["*"](...args); // fallback
    }
    throw new Error("No matching method");
  };

  multiMethod.def = (key, impl) => {
    methods[key] = impl;
    return multiMethod;
  };

  return multiMethod;
}
