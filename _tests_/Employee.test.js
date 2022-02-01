const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return the correct name", () => {
            const obj = new Employee("kai", 1, "kai@kaiconsulting.co");

            expect(obj.getName()).toBe("kai");
        })
        it("should return the correct id", () => {
            const obj = new Employee("kai", 1, "kai@kaiconsulting.co");
            expect(obj.getId()).toBe(1);
        })
        it("should return the correct email", () => {
            const obj = new Employee("kai", 1, "kai@kaiconsulting.co");
            expect(obj.getEmail()).toBe("kai@kaiconsulting.co");
        })
        it("should return Employee", () => {
            const obj = new Employee("kai", 1, "kai@kaiconsulting.co");
            expect(obj.getRole()).toBe("Employee");
        })
    })
})
