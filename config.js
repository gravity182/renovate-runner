module.exports = {
  platform: 'github',

  hostRules: [
    {
      matchHost: "gitlab.com",
      hostType: "pypi",
      username: "gitlab+deploy-token-10594845",
      password: process.env.RENOVATE_GITLAB_PYPI_REGISTRY_PASSWORD,
    },
  ],
};
