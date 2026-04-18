import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FinTemplate = 'twin' | 'keel' | 'thruster' | 'quad' | 'single' | '2+1' | '';
type FinSystem = 'fcs-ii' | 'futures' | 'glass-on' | '';
type FinMaterial = 'fiberglass' | 'wood' | 'carbon' | 'honeycomb' | 'g10' | '';
type FinFoil = 'flat' | 'inside-foil' | '50/50' | '80/20' | '60/40' | '';
type FinFlex = 'soft' | 'medium' | 'stiff' | '';
type Finish = 'matte' | 'glossy' | 'satin' | '';

interface FormData {
  name: string;
  boardModel: string;
  finTemplate: FinTemplate;
  finSystem: FinSystem;
  material: FinMaterial;
  foil: FinFoil;
  flex: FinFlex;
  base: string; // cm or inch
  height: string; // cm or inch
  area: string; // cm2
  rake: string; // degrees or description
  quantity: string; // e.g., Twin set, Thruster set, Quad set
  colorArt: string; // colors/tint/artwork
  finish: Finish;
  additionalNotes: string;
}

const Fins = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    boardModel: '',
    finTemplate: '',
    finSystem: '',
    material: '',
    foil: '',
    flex: '',
    base: '',
    height: '',
    area: '',
    rake: '',
    quantity: '',
    colorArt: '',
    finish: '',
    additionalNotes: ''
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const composeWhatsAppMessage = () => {
    const lines = [
      'Piri\'s Ding Repair - Custom Fins Request',
      '',
      'Contact:',
      `- Name: ${formData.name}`,
      '',
      'Board Context:',
      formData.boardModel ? `- Board/Model: ${formData.boardModel}` : undefined,
      '',
      'Fin Specs:',
      formData.quantity ? `- Set: ${formData.quantity}` : undefined,
      formData.finTemplate ? `- Template: ${formData.finTemplate}` : undefined,
      formData.finSystem ? `- System: ${formData.finSystem}` : undefined,
      formData.material ? `- Material: ${formData.material}` : undefined,
      formData.foil ? `- Foil: ${formData.foil}` : undefined,
      formData.flex ? `- Flex: ${formData.flex}` : undefined,
      (formData.base || formData.height) ? `- Dimensions: Base ${formData.base || '?'}, Height ${formData.height || '?'}` : undefined,
      formData.area ? `- Area: ${formData.area}` : undefined,
      formData.rake ? `- Rake: ${formData.rake}` : undefined,
      '',
      'Look & Finish:',
      formData.colorArt ? `- Color/Art: ${formData.colorArt}` : undefined,
      formData.finish ? `- Finish: ${formData.finish}` : undefined,
      '',
      'Additional Notes:',
      formData.additionalNotes || undefined,
      '',
      'Please provide a quote and lead time.'
    ].filter(Boolean).join('\n');
    return encodeURIComponent(lines);
  };

  const handleSubmitWhatsApp = () => {
    if (!formData.name) return;
    const msg = composeWhatsAppMessage();
    const url = `https://wa.me/50376717527?text=${msg}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Custom Fins</h1>
            <p className="text-muted-foreground">
              Handcrafted fins tailored to your surfing — templates, materials, foils, and finish.
            </p>
          </div>

          {/* How it works */}
          <section className="max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-2xl font-semibold mb-4">How it works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Choose your fin set, template, and materials.</li>
              <li>Fill in the Custom Fins request below.</li>
              <li>We confirm details, pricing, and lead time via WhatsApp.</li>
              <li>Pay the deposit to start your build.</li>
              <li>Pick up in La Libertad or arrange delivery.</li>
            </ol>
          </section>

          {/* FINS REQUEST FORM */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 md:p-8 border">
            <h2 className="font-serif text-2xl font-semibold mb-6">CUSTOM FINS REQUEST</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="boardModel">Board / Model</Label>
                  <Input id="boardModel" value={formData.boardModel} onChange={(e) => handleChange('boardModel', e.target.value)} placeholder="e.g. 5'6 Fish, 6'2 Shortboard" className="mt-1" />
                </div>

                <div>
                  <Label>Set</Label>
                  <Select value={formData.quantity} onValueChange={(v) => handleChange('quantity', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose set" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Twin">Twin</SelectItem>
                      <SelectItem value="Keel">Keel</SelectItem>
                      <SelectItem value="Thruster">Thruster</SelectItem>
                      <SelectItem value="Quad">Quad</SelectItem>
                      <SelectItem value="Single">Single</SelectItem>
                      <SelectItem value="2+1">2 + 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Template</Label>
                  <Select value={formData.finTemplate} onValueChange={(v) => handleChange('finTemplate', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="twin">Twin</SelectItem>
                      <SelectItem value="keel">Keel</SelectItem>
                      <SelectItem value="thruster">Thruster</SelectItem>
                      <SelectItem value="quad">Quad</SelectItem>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="2+1">2 + 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>System</Label>
                  <Select value={formData.finSystem} onValueChange={(v) => handleChange('finSystem', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose fin system" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fcs-ii">FCS II</SelectItem>
                      <SelectItem value="futures">Futures</SelectItem>
                      <SelectItem value="glass-on">Glass-on</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div>
                  <Label>Material</Label>
                  <Select value={formData.material} onValueChange={(v) => handleChange('material', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fiberglass">Fiberglass</SelectItem>
                      <SelectItem value="wood">Wood</SelectItem>
                      <SelectItem value="carbon">Carbon</SelectItem>
                      <SelectItem value="honeycomb">Honeycomb</SelectItem>
                      <SelectItem value="g10">G10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Foil</Label>
                  <Select value={formData.foil} onValueChange={(v) => handleChange('foil', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose foil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat">Flat</SelectItem>
                      <SelectItem value="inside-foil">Inside foil</SelectItem>
                      <SelectItem value="50/50">50/50</SelectItem>
                      <SelectItem value="80/20">80/20</SelectItem>
                      <SelectItem value="60/40">60/40</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Flex</Label>
                  <Select value={formData.flex} onValueChange={(v) => handleChange('flex', v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose flex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soft">Soft</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="stiff">Stiff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <Label htmlFor="base">Base</Label>
                    <Input id="base" value={formData.base} onChange={(e) => handleChange('base', e.target.value)} placeholder={'e.g. 4.8" / 122mm'} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" value={formData.height} onChange={(e) => handleChange('height', e.target.value)} placeholder={'e.g. 5.0" / 127mm'} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="area">Area</Label>
                    <Input id="area" value={formData.area} onChange={(e) => handleChange('area', e.target.value)} placeholder="e.g. 150 cm²" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="rake">Rake</Label>
                    <Input id="rake" value={formData.rake} onChange={(e) => handleChange('rake', e.target.value)} placeholder="e.g. 33° or 'upright'" className="mt-1" />
                  </div>
                  <div>
                    <Label>Finish</Label>
                    <Select value={formData.finish} onValueChange={(v) => handleChange('finish', v)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose finish" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matte">Matte</SelectItem>
                        <SelectItem value="satin">Satin</SelectItem>
                        <SelectItem value="glossy">Glossy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="colorArt">Color / Art</Label>
                  <Textarea id="colorArt" rows={3} value={formData.colorArt} onChange={(e) => handleChange('colorArt', e.target.value)} placeholder="Tints, resin color, inlays, logos..." className="mt-1" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6">
              <div>
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea id="additionalNotes" rows={4} value={formData.additionalNotes} onChange={(e) => handleChange('additionalNotes', e.target.value)} placeholder="Anything else we should know?" className="mt-1" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button onClick={handleSubmitWhatsApp} className="flex-1">Submit Request via WhatsApp</Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-3">We’ll reply with a quote and lead time within 24 hours.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fins;


