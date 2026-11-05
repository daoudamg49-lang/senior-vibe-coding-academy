/* Theme selector and module lesson states. Loaded after app.js so existing
   navigation handlers keep using these updated functions. */
(function () {
  const themeSelect = document.getElementById('themeSelect');
  if (!themeSelect) return;

  if (!themeSelect.querySelector('option[value="vscode"]')) {
    const option = document.createElement('option');
    option.value = 'vscode';
    option.textContent = 'VS Code Dark';
    themeSelect.append(option);
  }

  applyTheme = function (theme, persist = false) {
    const allowed = ['midnight', 'light', 'ocean', 'vscode'];
    const selected = allowed.includes(theme) ? theme : 'midnight';
    document.documentElement.dataset.theme = selected;
    themeSelect.value = selected;
    if (persist) {
      state.theme = selected;
      storage.set(STORAGE, JSON.stringify(state));
    }
  };
  applyTheme(state.theme || 'midnight');

  showModule = function (id) {
    const module = modules[id];
    if (!module) return;

    const courses = moduleChapters(id);
    const completed = courses.filter(course => state.completed.includes(course.id));
    const remaining = courses.filter(course => !state.completed.includes(course.id));
    const nextModule = modules.find(item => item.id > id);
    const nextChapter = remaining[0];
    const moduleCta = nextChapter
      ? `<button class="button primary" data-chapter="${nextChapter.id}">Continuer &middot; ${nextChapter.id} <span>&rarr;</span></button>`
      : nextModule
        ? `<button class="button primary" data-module="${nextModule.id}">Module suivant &middot; ${String(nextModule.id).padStart(2, '0')} <span>&rarr;</span></button>`
        : '<button class="button primary" data-view="achievements">Voir mes acquis <span>&rarr;</span></button>';

    const renderCourse = (course, done) => `<button class="path-node course-node ${done ? 'is-complete' : 'is-remaining'}" data-chapter="${course.id}">
      <span class="course-id">${done ? '&#10003;' : course.id}</span>
      <strong class="course-title">${course.title}</strong>
      <small class="course-time">${course.time}</small>
      <span class="course-status">${done ? '&#10003; VALID&Eacute;' : '&rarr; &Agrave; FAIRE'}</span>
    </button>`;

    const renderSection = (heading, items, done, emptyText) => `<section class="course-section ${done ? 'course-section-completed' : 'course-section-remaining'}">
      <h4 class="course-section-heading"><span>${done ? '&#10003;' : '&rarr;'}</span>${heading}<span class="course-count">${items.length}</span></h4>
      <div class="course-items">${items.length ? items.map(course => renderCourse(course, done)).join('') : `<p class="course-empty">${emptyText}</p>`}</div>
    </section>`;

    setNav(`module-${id}`);
    document.getElementById('crumbCurrent').textContent = `Module ${String(id).padStart(2, '0')}`;
    content.innerHTML = `<div class="page-header"><span class="eyebrow">MODULE ${String(id).padStart(2, '0')} &middot; PARCOURS</span><h1>${module.title}</h1><p>${module.desc}</p></div>
      <div class="path-grid"><article class="path-module open"><div class="path-head"><span class="path-number">${String(id).padStart(2, '0')}</span><span><h3>${module.title}</h3><p>${module.subtitle}</p></span><span class="path-trail">${progress(id)}% &middot; ${completed.length} valid&eacute;s &middot; ${remaining.length} &agrave; faire</span></div>
      <div class="module-course-groups">${renderSection('Cours &agrave; suivre', remaining, false, 'Tous les cours de ce module sont valid&eacute;s.')}${renderSection('Cours valid&eacute;s', completed, true, 'Les cours termin&eacute;s appara&icirc;tront ici.')}</div></article></div>
      <div class="complete-panel" style="margin-top:18px"><div><strong>${completed.length}/${courses.length} cours valid&eacute;s &middot; ${remaining.length} restants</strong><p>Le cours suivant reste accessible directement depuis ce parcours.</p></div>${moduleCta}</div>`;
    wireContent();
  };

  if (typeof currentView === 'string' && currentView.startsWith('module-')) {
    showModule(Number(currentView.slice(7)));
  }
})();
