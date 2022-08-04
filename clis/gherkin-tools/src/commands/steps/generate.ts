import { Command, Flags } from '@oclif/core';

export default class StepsGenerate extends Command {
  static description =
    'Parse Gherkin feature files and generate skeleton implementation files from it';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    // flag with no value (-f, --force)
    outputDir: Flags.string({
      char: 'd',
      description: 'Directory where implementation skeletons are created',
      default: 'out/step_functions',
    }),
    prefixGiven: Flags.string({
      char: 'g',
      description:
        'Prefix to use to group created skeleton files for Given steps',
      default: 'given',
    }),
    prefixThen: Flags.string({
      char: 't',
      description:
        'Prefix to use to group created skeleton files for Then steps',
      default: 'then',
    }),
    prefixWhen: Flags.string({
      char: 'w',
      description:
        'Prefix to use to group created skeleton files for When steps',
      default: 'when',
    }),
    syntax: Flags.string({
      char: 's',
      description: 'Syntax to use',
      default: 'ts',
      options: ['js', 'ts'],
    }),
    inputExtension: Flags.string({
      char: 'e',
      description: 'file extension of the feature files',
      default: 'feature',
      multiple: true,
    }),
    input: Flags.string({
      char: 'i',
      description:
        'Directory or file to use as root to find feature files. Same as command argument, but supports multi use',
      multiple: true,
    }),
    force: Flags.boolean({
      char: 'f',
      description: 'Force to overwrite existing files',
      default: false,
    }),
  };

  static args = [
    {
      name: 'inputDir',
      required: true,
      default: './features',
      description:
        'Directory or file to use as root to find feature files. Same as -i',
    },
  ];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(StepsGenerate);
    const {
      outputDir,
      prefixGiven,
      prefixThen,
      prefixWhen,
      syntax,
      inputExtension,
      input: inputFlagDirs,
      force,
    } = flags as {
      outputDir: string;
      prefixGiven: string;
      prefixThen: string;
      prefixWhen: string;
      syntax: 'js' | 'ts';
      inputExtension: string;
      input?: string[];
      force: boolean;
    };

    const { inputDir } = args;

    const input = [inputDir];

    if (inputFlagDirs && inputFlagDirs?.length > 0) {
      input.push(...inputFlagDirs.filter((inDir) => inDir.length > 0));
    }

    console.log(input);
    console.log(inputExtension);
    console.log(outputDir);
    console.log(prefixGiven, prefixWhen, prefixThen);
    console.log(syntax, force);
  }
}
