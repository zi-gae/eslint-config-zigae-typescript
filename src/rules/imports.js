// Sample code
module.exports = {
  "import/order": [
    "error",
    {
      "newlines-between": "always",
      pathGroups: [
        {
          pattern: "~/**",
          group: "external",
          position: "after",
        },
      ],
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
};
