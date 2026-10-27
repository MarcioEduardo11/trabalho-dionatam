document.querySelectorAll('[data-playground]').forEach((pg) => {
  const alvo = pg.querySelector('[data-alvo]');
  const saida = pg.querySelector('[data-saida]');
  const status = pg.querySelector('[data-status]');
  const selects = pg.querySelectorAll('select[data-prop]');
  const base = alvo.dataset.base || '';

  function atualizar() {
    alvo.style.cssText = base;
    Array.from(alvo.children).forEach((filho) => { filho.style.cssText = ''; });

    const linhasContainer = base ? [base] : [];
    const porItem = {};

    selects.forEach((s) => {
      const prop = s.dataset.prop;
      const n = s.dataset.item;

      if (n) {
        if (s.value === s.dataset.padrao) return;
        const filho = alvo.children[Number(n) - 1];
        if (!filho) return;
        filho.style.setProperty(prop, s.value);
        (porItem[n] = porItem[n] || []).push(`${prop}: ${s.value};`);
      } else {
        alvo.style.setProperty(prop, s.value);
        linhasContainer.push(`${prop}: ${s.value};`);
      }
    });

    let codigo = `.container {\n  ${linhasContainer.join('\n  ')}\n}`;
    Object.keys(porItem).forEach((n) => {
      codigo += `\n\n.item:nth-child(${n}) {\n  ${porItem[n].join('\n  ')}\n}`;
    });
    saida.textContent = codigo;
  }

  selects.forEach((s) => s.addEventListener('change', atualizar));

  const botaoAdd = pg.querySelector('[data-add]');
  const botaoRem = pg.querySelector('[data-remove]');
  const anunciar = () => {
    if (status) status.textContent = `${alvo.children.length} itens no container.`;
  };

  if (botaoAdd) {
    botaoAdd.addEventListener('click', () => {
      if (alvo.children.length >= 12) return;
      const novo = document.createElement('div');
      novo.className = alvo.firstElementChild.className;
      novo.textContent = String(alvo.children.length + 1);
      alvo.append(novo);
      atualizar();
      anunciar();
    });
  }
  if (botaoRem) {
    botaoRem.addEventListener('click', () => {
      if (alvo.children.length <= 1) return;
      alvo.lastElementChild.remove();
      atualizar();
      anunciar();
    });
  }

  atualizar();
});

document.querySelectorAll('[data-editor]').forEach((editor) => {
  const alvo = document.getElementById(editor.dataset.alvo);
  const inicial = editor.value;
  if (!alvo) return;

  const aplicar = () => { alvo.style.cssText = editor.value; };
  editor.addEventListener('input', aplicar);
  aplicar();

  const reset = document.querySelector(`[data-reset="${editor.id}"]`);
  if (reset) {
    reset.addEventListener('click', () => {
      editor.value = inicial;
      aplicar();
      editor.focus();
    });
  }
});
