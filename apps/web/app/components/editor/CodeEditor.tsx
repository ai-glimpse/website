import { ArrowPathIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import { usePython } from 'react-py';

import Controls from './Controls';
import Input from './Input';
import Loader from './Loader';

const editorOptions = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  highlightActiveLine: true,
  showPrintMargin: false,
};

const editorOnLoad = (editor: unknown) => {
  const aceEditor = editor as {
    renderer: {
      setScrollMargin: (a: number, b: number, c: number, d: number) => void;
    };
    moveCursorTo: (row: number, col: number) => void;
  };
  aceEditor.renderer.setScrollMargin(10, 10, 0, 0);
  aceEditor.moveCursorTo(0, 0);
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
  const [aceLoaded, setAceLoaded] = useState(false);

  // Load ace editor modules dynamically
  useEffect(() => {
    const loadAceModules = async () => {
      try {
        await import('ace-builds/src-noconflict/mode-python');
        await import('ace-builds/src-noconflict/theme-github');
        await import('ace-builds/src-noconflict/theme-idle_fingers');
        await import('ace-builds/src-noconflict/theme-xcode');
        await import('ace-builds/src-noconflict/ext-language_tools');
        setAceLoaded(true);
      } catch (error) {
        console.error('Failed to load ace modules:', error);
      }
    };
    
    loadAceModules();
  }, []);

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
        <div className="relative mb-4 flex flex-col">
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

          {aceLoaded ? (
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
          ) : (
            <div className="min-h-[7rem] rounded shadow-md bg-gray-100 flex items-center justify-center">
              <span>Loading editor...</span>
            </div>
          )}
          {isAwaitingInput && (
            <Input prompt={promptName} onSubmit={sendInput} />
          )}

          {showOutput && (
            <div className="mt-2 space-y-2 text-left">
              <div className="output-block">
                <div className="output-title">Output (stdout)</div>
                <pre className="output-content">{stdout}</pre>
              </div>
              {stderr && (
                <div className="output-block error">
                  <div className="output-title">Error (stderr)</div>
                  <pre className="output-content">{stderr}</pre>
                </div>
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
        }
        .code-editor-container {
          width: 100%;
        }
        .output-block {
          background-color: #f5f5f5;
          border-radius: 4px;
          overflow: hidden;
        }
        .output-block.error {
          background-color: #fff5f5;
        }
        .output-title {
          background-color: #e0e0e0;
          padding: 4px 8px;
          font-weight: bold;
          font-size: 0.9rem;
        }
        .output-content {
          padding: 8px;
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
          font-size: 0.9rem;
          max-height: 200px;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default CodeEditor;
