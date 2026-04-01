import { useState } from "react"
import "./MoodInput.css"

function MoodInput({ onSubmit, isLoading }) {
  const [text, setText] = useState("")

  function handleSubmit() {
    if (text.trim()) onSubmit(text.trim())
  }

  function handleKeyDown(e) {
    // Submit on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") handleSubmit()
  }

  return (
    <div className="mood-input">
      <textarea
        className="mood-textarea"
        placeholder="e.g. Had a rough day, feeling drained. Want something dark but not too heavy..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={4}
        disabled={isLoading}
      />
      <div className="mood-input-footer">
        <span className="mood-hint">Ctrl + Enter to submit</span>
        <button
          className="mood-btn"
          onClick={handleSubmit}
          disabled={isLoading || !text.trim()}
        >
          {isLoading ? "Finding movies..." : "Find movies"}
        </button>
      </div>
    </div>
  )
}

export default MoodInput