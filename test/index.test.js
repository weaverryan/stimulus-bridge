/*
 * This file is part of the Symfony Webpack Encore package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

const startStimulusApp = require('./dist/index').startStimulusApp;

describe('startStimulusApp', () => {
    it('must start the app', async () => {
        const app = startStimulusApp();

        // Wait for controllers to be loaded
        await new Promise(setImmediate);

        expect(app.router.modules.length).toBe(1);
        expect(app.router.modules[0].definition.identifier).toBe('symfony--mock-module--mock-controller');
    });
});
