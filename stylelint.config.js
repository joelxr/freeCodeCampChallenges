module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier"
  ],

  rules: {
    "string-no-newline": null,
    "selector-max-universal": 1,
    "selector-max-type": [0, { ignore: ["child", "descendant", "compounded"] }],
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["else"]
      }
    ]
  }
};
