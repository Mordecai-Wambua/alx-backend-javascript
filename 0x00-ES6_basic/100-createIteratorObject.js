export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let deptIdx = 0;
  let empIdx = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (deptIdx < departments.length) {
        const department = departments[deptIdx];
        const employees = allEmployees[department];

        if (empIdx < employees.length) {
          const value = employees[empIdx];
          empIdx += 1;
          return { value, done: false };
        }
        deptIdx += 1;
        empIdx = 0;
        return this.next();
      }
      return { value: undefined, done: true };
    },
  };
}
