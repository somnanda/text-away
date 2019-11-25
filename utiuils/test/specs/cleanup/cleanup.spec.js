import utils from '../../../src/utils/utilities';

describe('CleanUp Run', () => {

    it('Waterfall Deletion', () => {
        // utils.cleanUp('QA', 'all');
        utils.fullCleanUp();
    });
})
