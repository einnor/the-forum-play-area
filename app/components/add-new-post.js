import Component from '@ember/component';

export default Component.extend({
  showAddPostModal: false,
  actions: {
    closePromptDialog() {
      this.set('showAddPostModal', false);
    },
    savePost(title) {
      console.log(title);
    },
  },
});
