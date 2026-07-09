const defaultChips = [
  "Show today's revenue",
  'Draft the weekly report',
  'Any anomalies this week?',
];

function SuggestionChips({ chips = defaultChips, onChipClick }) {
  return (
    <div className="chips">
      {chips.map((chip, i) => (
        <button key={i} className="chip" onClick={() => onChipClick && onChipClick(chip)}>
          {chip}
        </button>
      ))}
    </div>
  );
}

export default SuggestionChips;