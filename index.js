import { i18n } from '@kbn/i18n';

export default function(kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'srirachaiq_jupyter',
    uiExports: {
      app: {
        title: 'Srirachaiq Jupyter',
        description: 'SrirachaIQ - JupyterLab',
        main: 'plugins/srirachaiq_jupyter/app',
      },
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    // eslint-disable-next-line no-unused-vars
    init(server, options) {
      const xpackMainPlugin = server.plugins.xpack_main;
      if (xpackMainPlugin) {
        const featureId = 'srirachaiq_jupyter';

        xpackMainPlugin.registerFeature({
          id: featureId,
          name: i18n.translate('srirachaiqJupyter.featureRegistry.featureName', {
            defaultMessage: 'srirachaiq_jupyter',
          }),
          navLinkId: featureId,
          icon: 'questionInCircle',
          app: [featureId, 'kibana'],
          catalogue: [],
          privileges: {
            all: {
              api: [],
              savedObject: {
                all: [],
                read: [],
              },
              ui: ['show'],
            },
            read: {
              api: [],
              savedObject: {
                all: [],
                read: [],
              },
              ui: ['show'],
            },
          },
        });
      }
    },
  });
}
