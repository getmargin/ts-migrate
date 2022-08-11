//import ts from 'typescript';
import { Plugin } from 'ts-migrate-server';
//import { updateSourceText, SourceTextUpdate } from 'ts-migrate-plugins';

type Options = { shouldReplaceText?: boolean };

const fixRelayTypes: Plugin<Options> = {
  name: 'fix-relay-types',
  async run({ sourceFile }) {
    console.log(`Running fix-relay-types for ${sourceFile}`);
  },
};

export default fixRelayTypes;
