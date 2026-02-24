import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import sortTags from 'ext:flarum/tags/common/utils/sortTags';

function findByClassName(vnode, className) {
  if (!vnode || typeof vnode !== 'object') return null;
  if (Array.isArray(vnode)) {
    for (const child of vnode) {
      const found = findByClassName(child, className);
      if (found) return found;
    }
    return null;
  }
  if (vnode.attrs && typeof vnode.attrs.className === 'string' && vnode.attrs.className.split(/\s+/).includes(className)) {
    return vnode;
  }
  if (vnode.children) return findByClassName(vnode.children, className);
  return null;
}

function appendText(vnode, text) {
  if (!vnode) return;

  if (typeof vnode.text === 'string') {
    vnode.text += text;
    return;
  }

  if (Array.isArray(vnode.children)) {
    const last = vnode.children[vnode.children.length - 1];
    if (last && last.tag === '#' && typeof last.children === 'string') {
      last.children += text;
    }
  }
}

app.initializers.add('datlechin/flarum-discussion-count', () => {
  extend('ext:flarum/tags/forum/components/TagLinkButton', 'view', function (vnode) {
    const tag = this.attrs.model;
    if (!tag) return;
    appendText(findByClassName(vnode, 'Button-label'), ` (${tag.discussionCount()})`);
  });

  extend('ext:flarum/tags/forum/components/TagsPage', 'tagTileView', function (vnode, tag) {
    appendText(findByClassName(vnode, 'TagTile-name'), ` (${tag.discussionCount()})`);

    const childrenNode = findByClassName(vnode, 'TagTile-children');
    if (childrenNode && Array.isArray(childrenNode.children)) {
      const childTags = sortTags(tag.children() || []);
      let i = 0;
      for (const item of childrenNode.children) {
        if (!item || typeof item !== 'object' || item.tag === '#') continue;
        if (childTags[i]) appendText(item, ` (${childTags[i].discussionCount()})`);
        i++;
      }
    }
  });
});
