import ErrorRepository from "../errorRepository";
describe("ErrorRepository", () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test("should return correct error message for known code", () => {
    expect(repo.translate(404)).toBe("Not Found");
    expect(repo.translate(500)).toBe("Internal Server Error");
    expect(repo.translate(403)).toBe("Forbidden");
  });

  test('should return "Unknown error" for unknown code', () => {
    expect(repo.translate(999)).toBe("Unknown error");
    expect(repo.translate(null)).toBe("Unknown error");
    expect(repo.translate(undefined)).toBe("Unknown error");
  });

  test("should not return error for zero code (if not in map)", () => {
    expect(repo.translate(0)).toBe("Unknown error");
  });

  test("should have initial errors loaded", () => {
    expect(repo.map.size).toBe(3);
    expect(repo.map.has(404)).toBe(true);
    expect(repo.map.has(500)).toBe(true);
    expect(repo.map.has(403)).toBe(true);
  });
});
