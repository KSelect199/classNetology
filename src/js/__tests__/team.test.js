import Team from "../team";
const char1 = { name: "Hero1", type: "Mage" };
const char2 = { name: "Hero2", type: "Archer" };
const char3 = { name: "Hero3", type: "Swordsman" };

describe("Team", () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test("should add a character to the team", () => {
    team.add(char1);
    expect(team.toArray()).toEqual([char1]);
  });

  test("should throw error when adding duplicate character", () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow(
      "Character already exists in the team"
    );
  });

  test("should add multiple characters with addAll", () => {
    team.addAll(char1, char2, char3);
    expect(team.toArray()).toEqual([char1, char2, char3]);
  });

  test("should not throw when adding duplicates with addAll", () => {
    team.addAll(char1, char1, char2);
    expect(team.toArray()).toEqual([char1, char2]);
  });

  test("should convert members to array", () => {
    team.add(char1);
    team.add(char2);
    const result = team.toArray();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([char1, char2]);
  });

  test("should have empty members by default", () => {
    expect(team.toArray()).toEqual([]);
  });
});
