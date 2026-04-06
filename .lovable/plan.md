## Plan: WhatsApp Integration, Logo Update & Contact Link

### 1. Copy uploaded logo to project

- Copy `user-uploads://Design_sem_nome.png` to `src/assets/manto-store-logo.png`

### 2. Update ExclusiveRequestModal — WhatsApp link on submit

- Replace `handleSubmit` to build a WhatsApp URL: `https://wa.me/5581985402833?text=Olá!%20Gostaria%20de%20solicitar%20um%20manto%20exclusivo:%0A-Nome:%20{name}%0A-Time:%20{team}%0A-Temporada:%20{season}%0A-Tamanho:%20{size}`
- Use `encodeURIComponent()` for each field value
- Call `window.open(url, '_blank')` then set submitted state

 **(WhatsApp URL):** Certifique-se de que a mensagem final seja uma única string contínua. Use `encodeURIComponent` em cada variável (`name`, `team`, `season`, `size`) para que espaços digitados pelo usuário virem `%20` automaticamente no link final: `https://wa.me/5581985402833?text=Olá!%20Gostaria%20de%20solicitar%20um%20manto%20exclusivo:%0A-Nome:%20${encodeURIComponent(name)}%0A-Time:%20${encodeURIComponent(team)}...`

### 3. Replace logo in Navbar

- Remove `Crown` icon, import the logo image from `@/assets/manto-store-logo.png`
- Render an `<img>` tag (~32-40px height) instead of Crown + text

### 4. Replace logo in Footer

- Same approach: import logo image, replace Crown + text with `<img>`

### 5. Update Footer "Contato" link

- Change the `href` for "Contato" from `#` to `https://wa.me/5581985402833` with `target="_blank"`

### Files modified

- `src/components/ExclusiveRequestModal.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/assets/manto-store-logo.png` (new)
  &nbsp;