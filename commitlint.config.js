module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'subject-case': [0, 'never']
  }
}
