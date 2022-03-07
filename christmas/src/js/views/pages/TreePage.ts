const TreePage = {
  render: () => {
    return `
        <div class="wrapper tree__wrapper">
          <div class="tree__settings">
            <div class="tree_choice settings__container"></div>
            <div class="bg_choice settings__container"></div>
            <div class="lights_choice settings__container"></div>
          </div>
          <div class="tree__main-tree"></div>
          <div class="tree__favorites"></div>
        </div>   
        `;
  },
};

export default TreePage;