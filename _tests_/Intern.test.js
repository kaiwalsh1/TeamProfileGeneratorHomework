const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should give name', () => {
        const obj = new Intern("kai", 1, "kai@kaiconsulting.co", 'DU');
        expect(obj.getName()).toBe('kai');
    });
    it('should give id', () => {
        const obj = new Intern("kai", 1, "kai@kaiconsulting.co", 'DU');
        expect(obj.getId()).toBe(1);
    });
    it('should give email', () => {
        const obj = new Intern("kai", 1, "kai@kaiconsulting.co", 'DU');
        expect(obj.getEmail()).toBe('kai@kaiconsulting.co');
    });
    it('should give DU', () => {
        const obj = new Intern("kai", 1, "kai@kaiconsulting.co", 'DU');
        expect(obj.getSchool()).toBe('DU');
    });
    it('should return Intern', () => {
        const obj = new Intern("kai", 1, "kai@kaiconsulting.co", 'DU');
        expect(obj.getRole()).toBe('Intern');
    });
})