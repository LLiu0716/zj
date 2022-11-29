type Config = {
  type: 'localStorage' | 'sessionStorage'
  expire: number
  isEncrypt: boolean
}

type StorageData = {
  value: unknown
  time: number
  expire: number
}

export class Storage {
  config: Config

  constructor(config: Config) {
    this.config = config
  }

  /**
   * 存储 Storage
   * @param key StorageKey
   * @param value StorageValue
   * @param expire 过期时间
   */
  setStorage(key: string, value: unknown, expire = 0) {
    if (!value) {
      value = ''
    }

    expire = (expire ? expire : this.config.expire) * 60000

    if (isNaN(expire) || expire < 1) throw new Error('Expire nust be a number')

    const data: StorageData = {
      value,
      time: Date.now(), // 当前存储时间戳
      expire // 过期时间
    }

    window[this.config.type].setItem(key, JSON.stringify(data))
  }

  /**
   * 获取 Storage
   * @param key StorageKey
   * @returns StorageValue
   */
  getStorage(key: string) {
    const storage = JSON.parse(window[this.config.type].getItem(key)!) as StorageData

    if (!key || !window[this.config.type].getItem(key) || !storage) {
      return null
    }

    const newTime = Date.now()

    if (storage.expire && this.config.expire * 6000 < newTime - storage.time) {
      this.removeStorage(key)
      return null
    } else {
      // 自动延续存储时间
      this.setStorage(key, storage.value)
      return storage.value
    }
  }

  /** 获取全部 Storage */
  getAllStorage() {
    const len = window[this.config.type].length
    const arr = []

    for (let i = 0; i < len; i++) {
      const key = window[this.config.type].key(i)
      const value = this.getStorage(key!)
      arr.push({
        key,
        value
      })
    }

    return arr.filter((item) => item.value)
  }

  /** 删除 Storage */
  removeStorage(key: string) {
    window[this.config.type].removeItem(key)
  }

  /** 清空 Storage */
  clearStorage() {
    window[this.config.type].clear()
  }
}

/**
 * 本地永久存储
 * @param expire 过期时间 单位: 分
 * @returns
 */
export const local = (expire = 600) => {
  return new Storage({
    type: 'localStorage',
    expire,
    isEncrypt: true
  })
}

/**
 * 本地临时存储
 * @param expire 过期时间 单位: 分
 * @returns
 */
export const session = (expire = 60) => {
  return new Storage({
    type: 'sessionStorage',
    expire,
    isEncrypt: true
  })
}
