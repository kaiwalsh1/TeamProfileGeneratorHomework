const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should give name', () => {
        const obj = new Engineer('kai', 3, 'kai@kaiconsulting.co', 'kaiwalsh1');
        expect(obj.getName()).toBe('kai');
    });
    it('should give id', () => {
        const obj = new Engineer('kai', 3, 'kai@kaiconsulting.co', 'kaiwalsh1');
        expect(obj.getId()).toBe(3);
    });
    it('should give email', () => {
        const obj = new Engineer('kai', 3, 'kai@kaiconsulting.co', 'kaiwalsh1');
        expect(obj.getEmail()).toBe('kai@kaiconsulting.co');
    });
    it('should give github username', () => {
        const obj = new Engineer('kai', 3, 'kai@kaiconsulting.co', 'kaiwalsh1');
        expect(obj.getGithub()).toBe('kaiwalsh1');
    });
    it('should return Engineer', () => {
        const obj = new Engineer('kai', 3, 'kai@kaiconsulting.co', 'kaiwalsh1');
        expect(obj.getRole()).toBe('Engineer');
    });
})