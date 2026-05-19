import { useState } from 'react';
import { Code2, Zap, Palette, Menu, X, Send, Github, Twitter, Linkedin } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">React Básico</span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {[['#inicio', 'Inicio'], ['#bloques', 'Bloques'], ['#formulario', 'Contacto']].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {[['#inicio', 'Inicio'], ['#bloques', 'Bloques'], ['#formulario', 'Contacto']].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="pt-32 pb-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-blue-100">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Estructura moderna con React
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 max-w-3xl mb-6">
          Interfaces{' '}
          <span className="text-blue-600">simples</span>,{' '}
          <span className="text-teal-600">rápidas</span> y{' '}
          <span className="text-gray-700">reutilizables</span>.
        </h1>

        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
          Esta página muestra una estructura básica hecha con React — componentes claros,
          interacción fluida y diseño limpio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#bloques"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-200"
          >
            Explorar bloques
          </a>
          <a
            href="#formulario"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 active:scale-95 transition-all duration-200 border border-gray-200 shadow-sm"
          >
            Contactar
          </a>
        </div>

        <div className="mt-20 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
          <img
            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Código en pantalla"
            className="w-full object-cover h-72 md:h-96"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['100%', 'Open Source'],
            ['18+', 'Versiones estables'],
            ['10M+', 'Proyectos activos'],
            ['MIT', 'Licencia libre'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-gray-900">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bloques */}
      <section id="bloques" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pilares de React
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Tres conceptos fundamentales que hacen de React una elección poderosa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 size={24} />,
              color: 'blue',
              title: 'Componentes',
              desc: 'Construye interfaces con piezas independientes y reutilizables. Cada componente encapsula su propia lógica y presentación.',
              tag: 'Reutilizable',
            },
            {
              icon: <Zap size={24} />,
              color: 'teal',
              title: 'Interacción',
              desc: 'Responde a eventos del usuario, cambios de estado y flujo de datos en tiempo real con un modelo declarativo.',
              tag: 'Reactivo',
            },
            {
              icon: <Palette size={24} />,
              color: 'orange',
              title: 'Diseño',
              desc: 'Compatible con Tailwind CSS, CSS Modules y cualquier sistema de diseño moderno para crear UIs consistentes.',
              tag: 'Flexible',
            },
          ].map(({ icon, color, title, desc, tag }) => {
            const iconClass: Record<string, string> = {
              blue: 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
              teal: 'bg-teal-50 text-teal-600 border-teal-100 group-hover:bg-teal-600 group-hover:text-white',
              orange: 'bg-orange-50 text-orange-600 border-orange-100 group-hover:bg-orange-600 group-hover:text-white',
            };
            const tagClass: Record<string, string> = {
              blue: 'bg-blue-50 text-blue-700 border-blue-100',
              teal: 'bg-teal-50 text-teal-700 border-teal-100',
              orange: 'bg-orange-50 text-orange-700 border-orange-100',
            };
            return (
              <article
                key={title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-all duration-300 ${iconClass[color]}`}>
                  {icon}
                </div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${tagClass[color]}`}>
                  {tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-blue-600 mx-6 rounded-3xl max-w-6xl md:mx-auto mb-24">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Listo para construir algo grande?
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Empieza con los bloques fundamentales y escala hacia aplicaciones complejas.
          </p>
          <a
            href="#formulario"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-700 text-sm font-bold rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Comenzar ahora
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hablemos
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Tienes alguna pregunta o proyecto en mente? Rellena el formulario y nos
              pondremos en contacto contigo lo antes posible.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Respuesta rápida', sub: 'Respondemos en menos de 24h' },
                { label: 'Sin spam', sub: 'Tu email no se comparte con nadie' },
                { label: 'Directo', sub: 'Comunicación clara y concisa' },
              ].map(({ label, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{label}</p>
                    <p className="text-gray-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mensaje enviado</h3>
                <p className="text-gray-500 text-sm">Gracias, te responderemos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold py-3 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-200"
                >
                  <Send size={16} />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-bold text-gray-800">React Básico</span>
          </div>
          <p className="text-sm text-gray-400">© 2026 React Básico. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <button key={i} className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-colors duration-200 shadow-sm">
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
