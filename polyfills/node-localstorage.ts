const ensureNodeLocalStorage = () => {
  const hasValidLocalStorage =
    typeof globalThis.localStorage !== "undefined" &&
    typeof globalThis.localStorage?.getItem === "function" &&
    typeof globalThis.localStorage?.setItem === "function";

  if (hasValidLocalStorage) {
    return;
  }

  const storage = new Map<string, string>();

  const fallback: Storage = {
    get length() {
      return storage.size;
    },
    clear() {
      storage.clear();
    },
    getItem(key: string) {
      return storage.has(key) ? storage.get(key)! : null;
    },
    key(index: number) {
      const keys = Array.from(storage.keys());
      return typeof keys[index] === "string" ? keys[index] : null;
    },
    removeItem(key: string) {
      storage.delete(key);
    },
    setItem(key: string, value: string) {
      storage.set(key, value);
    },
  };

  Object.defineProperty(globalThis, "localStorage", {
    value: fallback,
    configurable: true,
  });
};

ensureNodeLocalStorage();

export {};

