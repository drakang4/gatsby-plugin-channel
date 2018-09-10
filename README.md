# gatsby-plugin-channel

Gatsby plugin to integrate [Channel.io](https://channel.io/) on your project.

## Install

`npm install --save gatsby-plugin-channel` or `yarn add gatsby-plugin-channel`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-channel`,
    options: {
      channelPluginSettings: {
        pluginKey: 'YOUR_PLUGIN_KEY',
        ...
      },
    },
  },
];
```

### Configuration

You can find all `channelPluginSettings` options in [official Channel documentation](https://developers.channel.io/docs/web-channelpluginsettings).
