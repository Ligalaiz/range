const templateStr = `
    <div class="range">
      <div class="range__head">
        <div class="range__title">Range Slider</div>
        <div class="range__count">
          <span id="fromField"></span>
          <span> - </span>
          <span id="toField"></span>
        </div>
      </div>
      <div class="range__wrap">
        <input
          class="range__field range__field--min"
          type="range"
          min="0"
          max="15000"
          value="5000"
          id="fromRange"
          name="fromRange"
        />
        <input
          class="range__field range__field--max"
          type="range"
          min="0"
          max="15000"
          value="10000"
          id="toRange"
          name="toRange"
        />
        <div class="range__slider">
          <div class="range__track"></div>
          <div class="range__range" id="range"></div>
          <div class="range__thumb range__thumb--left" id="thumbLeft"></div>
          <div class="range__thumb range__thumb--right" id="thumbRight"></div>
        </div>
      </div>
    </div>`;

export { templateStr };
