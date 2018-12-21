/**
 * @type {jest.ProjectConfig}
 */
module.exports = {
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	// testRegex: '(/__test__/(types/)?.*|(\\.|/))(test|spec)\\.tsx?$',
	testRegex: '(/__tests__/(types/)?.*)(test|spec)\\.tsx?$',
	testPathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
		'/types/'
	],
	moduleFileExtensions: [
		'ts', 'tsx',
		'js', 'jsx',
		'json',
		'node'
	],
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/__tests__/tsconfig.json'
		}
	},
	moduleNameMapper: {
		'^@ktb/type-test$': '<rootDir>',
		'^@ktb/type-test/(.*)$': '<rootDir>/$1'
	}
}
