import { StrictMode, useState, type FormEvent, type ComponentType, type SVGProps } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Droplet, ShieldCheck, Leaf, Heart, Menu, X, ArrowRight, Package,
  Users, ShoppingCart, Building2, Plane, House, Utensils, Store, Mail,
  Phone, MapPin, CheckCircle2
} from 'lucide-react';
import './styles.css';

type Product = {
  size: string;
  name: string;
  note: string;
  description: string;
  suited: string;
  sales: string;
  kind: 'small' | 'medium' | 'large' | 'xl';
};

type NavLink = {
  label: string;
  href: string;
};

type Audience = {
  Icon: ComponentType<SVGProps<SVGSVGElement>> | typeof House;
  title: string;
  description: string;
};

const products: Product[] = [
  {
    size: '300 ml',
    name: 'Compact Pack',
    note: 'Ideal for events and gatherings.',
    description: 'A convenient small bottle for weddings, meetings, conferences, parties and catered events.',
    suited: 'Events, catering and functions',
    sales: 'Bulk and event orders',
    kind: 'small',
  },
  {
    size: '500 ml',
    name: 'Everyday Hydration',
    note: 'Convenient for daily use.',
    description: 'A handy bottle for travel, office use, retail outlets, restaurants and outdoor activities.',
    suited: 'Retail, travel and offices',
    sales: 'Individual and bulk orders',
    kind: 'medium',
  },
  {
    size: '1 Litre',
    name: 'Everyday Essential',
    note: 'For home, work and travel.',
    description: 'A practical size for daily hydration at home, workplaces, restaurants and during journeys.',
    suited: 'Homes, offices and restaurants',
    sales: 'Retail and bulk orders',
    kind: 'large',
  },
  {
    size: '2 Litre',
    name: 'Family Pack',
    note: 'A larger option for sharing.',
    description: 'A convenient larger bottle for families, group meals, small gatherings and workplace use.',
    suited: 'Families, groups and shared meals',
    sales: 'Retail and bulk orders',
    kind: 'xl',
  },
];

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#products' },
  { label: 'Why Inchara Aqua', href: '#quality' },
  { label: 'Business Orders', href: '#business' },
  { label: 'Contact', href: '#order' },
];

const audiences: Audience[] = [
  { Icon: House, title: 'Homes & families', description: 'Everyday bottles for the family table.' },
  { Icon: Building2, title: 'Offices & workplaces', description: 'Convenient hydration for teams and visitors.' },
  { Icon: Utensils, title: 'Restaurants', description: 'Bottle sizes for dining and takeaway needs.' },
  { Icon: Plane, title: 'Travel & retail', description: 'Handy hydration for busy days on the move.' },
  { Icon: Users, title: 'Events & catering', description: 'Bulk enquiries for meetings, functions and celebrations.' },
  { Icon: Store, title: 'Retail & bulk buyers', description: 'Discuss your regular supply requirements.' },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Inchara Aqua home">
      <span className="brand-mark"><Droplet size={29} strokeWidth={2.2} /></span>
      <span className="brand-copy">
        <strong>Inchara <em>Aqua</em></strong>
        <small>PURE · SAFE · REFRESHING</small>
      </span>
    </a>
  );
}

function Bottle({ size, kind }: { size: string; kind: Product['kind'] }) {
  return (
    <div className={`bottle bottle-${kind}`} aria-label={`${size} Inchara Aqua bottle illustration`} role="img">
      <div className="bottle-cap" />
      <div className="bottle-neck" />
      <div className="bottle-body">
        <div className="bottle-shine" />
        <div className="bottle-label">
          <Droplet size={20} fill="#078bd1" strokeWidth={1.5} />
          <b>Inchara</b><b>Aqua</b>
          <span>{size}</span>
        </div>
        <div className="bottle-ridge ridge-one" />
        <div className="bottle-ridge ridge-two" />
        <div className="bottle-ridge ridge-three" />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('500 ml');
  const [submitted, setSubmitted] = useState<boolean>(false);

  function goToOrder(product?: string): void {
    if (product) setSelectedProduct(product);
    setSubmitted(false);
    document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' });
  }

  function submitEnquiry(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <button className="button button-small" onClick={() => { setMenuOpen(false); goToOrder(); }}>
              Enquire Now <ArrowRight size={16} />
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-watermark" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> PURE · SAFE · REFRESHING</div>
              <h1>Good water.<br /><span>Better every day.</span></h1>
              <p className="hero-lede">Meet Inchara Aqua — hydration for everyday moments and special occasions.</p>
              <p className="hero-sub">From a quick refresh on the go to family meals and business events, find a pack that fits your day.</p>
              <div className="hero-actions">
                <a className="button" href="#products">Explore our products <ArrowRight size={17} /></a>
                <a className="text-link" href="#about">Discover Inchara Aqua</a>
              </div>
              <div className="trust-row">
                <span><Droplet /> Everyday hydration</span><i />
                <span><ShieldCheck /> Quality focused</span><i />
                <span><Leaf /> Thoughtfully made</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="sun-glow" />
              <div className="hero-splash splash-a" /><div className="hero-splash splash-b" />
              <div className="hero-bottles">
                {products.map((product) => (
                  <div className="hero-bottle" key={product.size}>
                    <Bottle size={product.size} kind={product.kind} />
                  </div>
                ))}
              </div>
              <div className="hero-caption"><span>Refresh your</span><strong>every moment.</strong></div>
            </div>
          </div>
          <div className="hero-bottom-wave" />
        </section>

        <section className="product-section section" id="products">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow centered">OUR PRODUCT RANGE</span>
              <h2>Water for every moment.</h2>
              <p>Choose the pack that fits your day, your family or your business.</p>
            </div>
            <div className="product-grid">
              {products.map((product, index) => (
                <article className="product-card" key={product.size}>
                  <div className={`product-art product-art-${index}`}>
                    <span className="art-circle" />
                    <Bottle size={product.size} kind={product.kind} />
                    <span className="pack-tag">{product.size}</span>
                  </div>
                  <div className="product-info">
                    <div className="product-title">
                      <div><h3>{product.size}</h3><p className="product-name">{product.name}</p></div>
                      <span className="product-index">0{index + 1}</span>
                    </div>
                    <p className="product-note">{product.note}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-meta">
                      <span><Users size={16} /><b>Best suited for</b></span><p>{product.suited}</p>
                    </div>
                    <div className="product-meta">
                      <span><ShoppingCart size={16} /><b>Sales</b></span><p>{product.sales}</p>
                    </div>
                    <button className="button button-outline" onClick={() => goToOrder(product.size)}>
                      Enquire about this pack <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quality-section section" id="quality">
          <div className="container quality-grid">
            <div className="quality-copy">
              <span className="eyebrow">THE INCHARA AQUA APPROACH</span>
              <h2>A refreshing choice<br /><span>for everyday life.</span></h2>
              <p>We want finding the right water pack to be simple — whether you are stocking your shop, planning an event or filling the family table.</p>
              <a href="#about" className="text-link">Get to know our brand <ArrowRight size={16} /></a>
            </div>
            <div className="quality-features">
              <div className="feature"><span><Droplet /></span><div><h3>Made for daily hydration</h3><p>Pack sizes designed around different everyday needs.</p></div></div>
              <div className="feature"><span><ShieldCheck /></span><div><h3>Quality comes first</h3><p>Product quality and compliance information can be added here once verified.</p></div></div>
              <div className="feature"><span><Package /></span><div><h3>Thoughtful pack options</h3><p>Choose a size to suit your plans and order volume.</p></div></div>
              <div className="feature"><span><Heart /></span><div><h3>For every kind of gathering</h3><p>From individual purchases to planned bulk requirements.</p></div></div>
            </div>
            <div className="quality-stamp"><Droplet size={30} /><span>INCHARA AQUA</span><b>Refresh<br />your day</b></div>
          </div>
        </section>

        <section className="audience-section section" id="business">
          <div className="container">
            <div className="audience-head">
              <div><span className="eyebrow">FOR EVERY SPACE</span><h2>One brand. Many moments.</h2></div>
              <p>Retail, hospitality, workplaces and events — let's find the right pack for your needs.</p>
            </div>
            <div className="audience-grid">
              {audiences.map(({ Icon, title, description }) => (
                <div className="audience-card" key={title}>
                  <span className="audience-icon"><Icon /></span>
                  <h3>{title}</h3><p>{description}</p>
                  <button onClick={() => goToOrder()} aria-label={`Enquire for ${title}`}><ArrowRight /></button>
                </div>
              ))}
            </div>
            <div className="bulk-banner">
              <div className="bulk-icon"><Users /></div>
              <div><span className="eyebrow">BUSINESS & BULK ORDERS</span><h3>Planning a larger order?</h3><p>Tell us what you need and our team can follow up with the right information.</p></div>
              <button className="button" onClick={() => goToOrder()}>Request an enquiry <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container about-grid">
            <div className="about-art">
              <div className="about-circle"><Droplet size={54} /></div>
              <span className="about-word">INCHARA<br />AQUA</span><div className="about-rings" />
            </div>
            <div className="about-copy">
              <span className="eyebrow">A LITTLE ABOUT US</span>
              <h2>Everyday refreshment,<br /><span>with a personal touch.</span></h2>
              <p>Inchara Aqua is being built around a simple idea: make it easy for people and businesses to find a water pack for the moment they need it.</p>
              <p>From compact event packs to family-sized bottles, our product range is designed to serve different occasions and order sizes.</p>
              <a className="button button-dark" href="#order">Talk to Inchara Aqua <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="order-section section" id="order">
          <div className="container order-grid">
            <div className="order-intro">
              <span className="eyebrow">LET'S CONNECT</span>
              <h2>How can we help<br /><span>you stay refreshed?</span></h2>
              <p>Ask about a product, retail availability or bulk orders for your business or event.</p>
              <div className="contact-placeholder"><span><Mail /></span><div><b>Email</b><p>Add your official business email</p></div></div>
              <div className="contact-placeholder"><span><Phone /></span><div><b>Phone</b><p>Add your business contact number</p></div></div>
              <div className="contact-placeholder"><span><MapPin /></span><div><b>Location</b><p>Add your service area or business address</p></div></div>
            </div>
            <form className="enquiry-form" onSubmit={submitEnquiry}>
              <h3>Send an enquiry</h3><p>Fill in your details and choose what you need.</p>
              {submitted ? (
                <div className="success-message">
                  <CheckCircle2 size={28} /><h4>Enquiry details captured</h4>
                  <p>This demo form is working locally. Connect an email service or backend to deliver enquiries to your team.</p>
                  <button type="button" className="button" onClick={() => setSubmitted(false)}>Send another enquiry</button>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <label>Your name<input required name="name" placeholder="Enter your name" /></label>
                    <label>Phone number<input required name="phone" type="tel" placeholder="Enter phone number" /></label>
                  </div>
                  <label>Email address <span className="optional">(optional)</span><input name="email" type="email" placeholder="you@example.com" /></label>
                  <div className="form-row">
                    <label>I'm enquiring for<select name="customerType" defaultValue="Business / bulk order"><option>Individual purchase</option><option>Retail shop</option><option>Business / bulk order</option><option>Event / catering</option><option>Restaurant / office</option></select></label>
                    <label>Product size<select value={selectedProduct} onChange={(event) => setSelectedProduct(event.target.value)}>{products.map((product) => <option key={product.size}>{product.size}</option>)}<option>Multiple sizes</option></select></label>
                  </div>
                  <label>Message<textarea name="message" rows={3} placeholder="Tell us the quantity, location or event date..." /></label>
                  <button className="button form-submit" type="submit">Submit enquiry <ArrowRight size={16} /></button>
                  <small className="form-note">Demo only: connect a backend or email service before publishing.</small>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand"><Brand light /><p>Pure · Safe · Refreshing</p><span>Hydration for every moment.</span></div>
          <div className="footer-links"><h4>Explore</h4>{navLinks.slice(0, 5).map(({ label, href }) => <a href={href} key={label}>{label}</a>)}</div>
          <div className="footer-links"><h4>Our packs</h4>{products.map((product) => <a href="#products" key={product.size}>{product.size} · {product.name}</a>)}</div>
          <div className="footer-contact">
            <h4>Contact</h4><p><Mail size={15} /> Add official email</p><p><Phone size={15} /> Add phone number</p><p><MapPin size={15} /> Add business location</p>
            <button className="footer-cta" onClick={() => goToOrder()}>Make an enquiry <ArrowRight size={15} /></button>
          </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Inchara Aqua. All rights reserved.</span><span>Website concept for Inchara Aqua</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
