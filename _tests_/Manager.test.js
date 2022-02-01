const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should return name', () => {
        const obj = new Manager("kai", 2, "kai@kaiconsulting.co", 4018644067);
        expect(obj.getName()).toBe('kai');
    });
    it('should return id', () => {
        const obj = new Manager("kai", 2, "kai@kaiconsulting.co", 4018644067);
        expect(obj.getId()).toBe(2);
    });
    it('should return email', () => {
        const obj = new Manager("kai", 2, "kai@kaiconsulting.co", 4018644067);
        expect(obj.getEmail()).toBe('kai@kaiconsulting.co');
    });
    it('should return office number', () => {
        const obj = new Manager("kai", 2, "kai@kaiconsulting.co", 4018644067);
        expect(obj.getOfficeNumber()).toBe(4018644067);
    });
    it('should return manager', () => {
        const obj = new Manager("kai", 2, "kai@kaiconsulting.co", 4018644067);
        expect(obj.getRole()).toBe('Manager');
    });
});