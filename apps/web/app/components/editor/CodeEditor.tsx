import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-idle_fingers';
import 'ace-builds/src-noconflict/ext-language_tools';
// import { useColorMode } from '@theme-ui/color-modes';

import Controls from './Controls';
import Loader from './Loader';
import Input from './Input';
import { ArrowPathIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid';
import { usePython } from 'react-py';
import { Code } from '@chakra-ui/react';

const editorOptions = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  highlightActiveLine: true,
  showPrintMargin: false,
};

const editorOnLoad = (editor: any) => {
  editor.renderer.setScrollMargin(10, 10, 0, 0);
  editor.moveCursorTo(0, 0);
};

export interface Packages {
  official?: string[];
  micropip?: string[];
}

interface CodeEditorProps {
  code: string;
  packages?: Packages;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const { code, packages } = props;
  const [input, setInput] = useState(code.trimEnd());
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    setInput(code.trimEnd());
    setShowOutput(false);
  }, [code]);

  // const { colorMode } = useColorMode();

  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isRunning,
    interruptExecution,
    isAwaitingInput,
    sendInput,
    prompt,
  } = usePython({ packages });
  const promptName: string = prompt !== undefined ? prompt : '';

  function run() {
    runPython(input);
    setShowOutput(true);
  }

  function stop() {
    interruptExecution();
    setShowOutput(false);
  }

  function reset() {
    setShowOutput(false);
    setInput(code.trimEnd());
  }

  return (
    <div className="code-editor-wrapper">
      <div className="code-editor-container">
        <div className="relative mb-10 flex flex-col">
          <Controls
            items={[
              {
                label: 'Run',
                icon: PlayIcon,
                onClick: run,
                disabled: isLoading || isRunning,
                hidden: isRunning,
              },
              {
                label: 'Stop',
                icon: StopIcon,
                onClick: stop,
                hidden: !isRunning,
              },
              {
                label: 'Reset',
                icon: ArrowPathIcon,
                onClick: reset,
                disabled: isRunning,
              },
            ]}
            isAwaitingInput={isAwaitingInput}
          />

          {isLoading && <Loader />}

          <AceEditor
            value={input}
            mode="python"
            name="CodeBlock"
            fontSize="0.9rem"
            className="min-h-[7rem] overflow-clip rounded shadow-md"
            theme={'xcode'}
            // theme={'github'}
            onChange={(newValue) => setInput(newValue)}
            width="100%"
            maxLines={Infinity}
            onLoad={editorOnLoad}
            editorProps={{ $blockScrolling: true }}
            setOptions={editorOptions}
          />
          {isAwaitingInput && (
            <Input prompt={promptName} onSubmit={sendInput} />
          )}

          {showOutput && (
            <div className="mt-4 text-left">
              <pre className="p-0">
                <Code w="100%">{stdout}</Code>
              </pre>
              {stderr && (
                <pre>
                  <Code w="100%" colorScheme="red">
                    {stderr}
                  </Code>
                </pre>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .code-editor-wrapper {
          display: flex;
          justify-content: left;
          padding: 0;
          //align-items: center;
          //height: 100vh;
        }
        .code-editor-container {
          width: 90%; /* Adjust the width as needed */
          /* Add any other styling you want */
        }
      `}</style>
    </div>
  );
};

export default CodeEditor;
