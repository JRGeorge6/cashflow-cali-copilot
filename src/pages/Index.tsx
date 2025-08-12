import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Banknote, Timer, Zap } from "lucide-react";
import SchedulerModal from "@/components/SchedulerModal";

const Index = () => {
  const [open, setOpen] = useState(false);
  const canonical = typeof window !== "undefined" ? window.location.href : "";


  const faq = [
    {
      q: "How much can I actually save?",
      a: "Send a recent statement—we’ll review and outline options, including interchange-plus where supported.",
    },
    { q: "When do I get my money?", a: "Next-day funding is common; instant options may be available where supported." },
    { q: "Will checkout be slow?", a: "Quick Chip and tap are fast—chip dip can be ~2 seconds in many setups." },
    { q: "What about fraud?", a: "EMV helps reduce counterfeit-card chargebacks at chip-enabled merchants." },
    { q: "Can I keep my POS?", a: "Often yes—we’ll match compatible hardware and flows with your setup." },
    { q: "Is there a contract?", a: "Month-to-month is often available. We’ll keep terms simple and clear." },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Lower Costs & Get Paid Faster | EPI Terminals (CA)</title>
        <meta name="description" content="Place an EPI terminal with transparent pricing. Lower processing costs, speed checkout, and improve cash flow. California-compliant displays." />
        {canonical && <link rel="canonical" href={canonical} />}
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <header className="container py-10">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold">EPI Placement</div>
          <Button variant="link" asChild>
            <a href="#contact" aria-label="Have a question? Call us">Have a question? Call us</a>
          </Button>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="container grid gap-6 pb-12 pt-6 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Lower Your Processing Costs. Get Paid Faster.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Place an EPI terminal with transparent pricing and California-clean displays—installed fast, supported 24/7.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Button variant="hero" size="lg" onClick={() => setOpen(true)}>
                  Book a 15-Minute Call
                </Button>
              </div>
            </div>

            {/* Micro-benefits */}
            <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Banknote className="text-primary" />
                  <div className="font-medium">Keep more per sale</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Timer className="text-primary" />
                  <div className="font-medium">Next-day funding</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Zap className="text-primary" />
                  <div className="font-medium">Fast chip & tap checkout</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You Gain */}
        <section className="border-t">
          <div className="container py-12 md:py-16">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight">What You Gain</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="h-full"><CardHeader><CardTitle>Keep more per ticket</CardTitle></CardHeader><CardContent>
                Clear, competitive pricing options (interchange-plus available) so you’re not overpaying on low-cost card types.
              </CardContent></Card>
              <Card className="h-full"><CardHeader><CardTitle>Better cash flow</CardTitle></CardHeader><CardContent>
                Next-day funding (and optional instant) keeps money in the bank faster—less bridging on credit lines.
              </CardContent></Card>
              <Card className="h-full"><CardHeader><CardTitle>Fewer headaches</CardTitle></CardHeader><CardContent>
                EMV chip liability dynamics help reduce counterfeit-card chargebacks at chip-enabled merchants.
              </CardContent></Card>
              <Card className="h-full"><CardHeader><CardTitle>Shorter lines</CardTitle></CardHeader><CardContent>
                Quick Chip/contactless flows speed checkout—chip dip can be ~2 seconds in many setups.
              </CardContent></Card>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="hero" size="lg" onClick={() => setOpen(true)}>Book a 15-Minute Call</Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t">
          <div className="container py-12 md:py-16">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card><CardHeader><CardTitle>Book</CardTitle></CardHeader><CardContent>
                Pick a time—we’ll confirm your goals and timelines.
              </CardContent></Card>
              <Card><CardHeader><CardTitle>Pick pricing & hardware</CardTitle></CardHeader><CardContent>
                Choose a clear pricing option and terminal that fits your counter.
              </CardContent></Card>
              <Card><CardHeader><CardTitle>Install & start</CardTitle></CardHeader><CardContent>
                Often live in 24–72 hours with 24/7 support.
              </CardContent></Card>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="hero" size="lg" onClick={() => setOpen(true)}>Book a 15-Minute Call</Button>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t">
          <div className="container py-12 md:py-16">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight">Simple Pricing Options</h2>
            </div>
            <div className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
              <p className="mb-4">
                Interchange-plus means wholesale interchange + a small, fixed markup = transparent, itemized costs.
              </p>
              <p>
                Example: a low-cost debit might carry a small network fee plus a modest markup—so you keep more on inexpensive card types.
              </p>
              <p className="mt-4 text-sm">
                We’ll walk you through options and help you pick what fits best.
              </p>
              <p className="mt-6 text-xs">
                California Note: We show all-in prices up front per SB 478 (the ‘Honest Pricing’ law)—ask us about signage/receipt wording if you use dual pricing.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="hero" size="lg" onClick={() => setOpen(true)}>Book a 15-Minute Call</Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t">
          <div className="container py-12 md:py-16">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
              <p className="text-muted-foreground">Owner practicality—straight answers.</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="hero" size="lg" onClick={() => setOpen(true)}>Book a 15-Minute Call</Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t">
          <div className="container py-12 md:py-16 text-center">
            <Button variant="hero" size="lg" onClick={() => setOpen(true)}>Book a 15-Minute Call</Button>
            <div id="contact" className="mt-3 text-sm text-muted-foreground">
              Have a question? Call us
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 text-center text-xs text-muted-foreground">
          Independent agent. EPI and Electronic Payments, Inc. are trademarks of their respective owners.
        </div>
      </footer>

      <SchedulerModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Index;
