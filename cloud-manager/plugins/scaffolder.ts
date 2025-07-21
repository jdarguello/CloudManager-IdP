import { ScmIntegrations } from '@backstage/integration';
import { createGithubActionsDispatchAction } from '@backstage/plugin-scaffolder-backend-module-github';
import { createRouter } from '@backstage/plugin-scaffolder-backend';

export default async function createPlugin(env: PluginEnvironment) {
  const integrations = ScmIntegrations.fromConfig(env.config, 'integrations');
  const builder = await createRouter(env);
  builder.addAction(
    createGithubActionsDispatchAction({ integrations }),
  );
  return await builder.build();
}
