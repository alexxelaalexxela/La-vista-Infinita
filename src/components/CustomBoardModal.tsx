import React, { useState } from 'react';
import { Save, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface CustomBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  
  height: string;
  weight: string;
  surfLevel: string;
  waveType: string;
  boardType: string;
  length: string;
  width: string;
  thickness: string;
  artworkDescription: string;
  budget: string;
  additionalNotes: string;
}

const CustomBoardModal = ({ isOpen, onClose }: CustomBoardModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    height: '',
    weight: '',
    surfLevel: '',
    waveType: '',
    boardType: '',
    length: '',
    width: '',
    thickness: '',
    artworkDescription: '',
    budget: '',
    additionalNotes: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateEmailBody = () => {
    return encodeURIComponent(`
Piri's Ding Repair Custom Board Request

Personal Information:
- Name: ${formData.name}

Physical Specs:
- Height: ${formData.height}
- Weight: ${formData.weight}
- Surf Level: ${formData.surfLevel}

Board Requirements:
- Wave Type: ${formData.waveType}
- Board Type: ${formData.boardType}
- Length: ${formData.length}
- Width: ${formData.width}
- Thickness: ${formData.thickness}

Artwork:
- Description: ${formData.artworkDescription}

Budget: ${formData.budget}

Additional Notes:
${formData.additionalNotes}

Please provide a detailed quote and timeline for this custom board.

Best regards,
${formData.name}
    `);
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(`Hi Piri's Ding Repair! I'd like to order a custom board:

📋 Personal Info:
Name: ${formData.name}
Height: ${formData.height} | Weight: ${formData.weight}
Surf Level: ${formData.surfLevel}

🏄 Board Specs:
Type: ${formData.boardType}
Wave Conditions: ${formData.waveType}
Dimensions: ${formData.length} x ${formData.width} x ${formData.thickness}

🎨 Artwork Details: ${formData.artworkDescription || 'N/A'}

💰 Budget: ${formData.budget}

${formData.additionalNotes ? `Notes: ${formData.additionalNotes}` : ''}

Please send me a quote and timeline!`);
  };

  const handleSaveLocally = () => {
    try {
      const existingRequests = JSON.parse(localStorage.getItem('piriDingRepairRequests') || '[]');
      const newRequest = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      existingRequests.push(newRequest);
      localStorage.setItem('piriDingRepairRequests', JSON.stringify(existingRequests));
      
      toast({
        title: "Request Saved",
        description: "Your custom board request has been saved locally.",
      });
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "Could not save your request locally.",
        variant: "destructive"
      });
    }
  };

  const handleEmailSubmit = () => {
    if (!formData.name) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name.",
        variant: "destructive"
      });
      return;
    }
    
    const mailtoUrl = `mailto:?subject=${encodeURIComponent('Piri\'s Ding Repair Custom Board Request')}&body=${generateEmailBody()}`;
    window.location.href = mailtoUrl;
    handleSaveLocally();
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name.",
        variant: "destructive"
      });
      return;
    }
    
    const whatsappUrl = `https://wa.me/50376717527?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
    handleSaveLocally();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      height: '',
      weight: '',
      surfLevel: '',
      waveType: '',
      boardType: '',
      length: '',
      width: '',
      thickness: '',
      artworkDescription: '',
      budget: '',
      additionalNotes: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">Custom Board Request</DialogTitle>
          <DialogDescription className="text-center">
            Tell us about your dream board and we'll create something amazing for you.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Personal Information</h3>
            
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your full name"
                className="mt-1"
              />
            </div>

            

            

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  placeholder="170 cm / 5'7&quot;"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight</Label>
                <Input
                  id="weight"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  placeholder="70 kg / 155 lbs"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="surfLevel">Surf Level</Label>
              <Select value={formData.surfLevel} onValueChange={(value) => handleInputChange('surfLevel', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your surf level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Board Specifications */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Board Specifications</h3>
            
            <div>
              <Label htmlFor="waveType">Wave Conditions</Label>
              <Select value={formData.waveType} onValueChange={(value) => handleInputChange('waveType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="What waves will you surf?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small-mellow">Small & Mellow (1-3ft)</SelectItem>
                  <SelectItem value="medium-fun">Medium & Fun (3-6ft)</SelectItem>
                  <SelectItem value="large-powerful">Large & Powerful (6ft+)</SelectItem>
                  <SelectItem value="all-conditions">All Conditions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="boardType">Board Type</Label>
              <Select value={formData.boardType} onValueChange={(value) => handleInputChange('boardType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select board type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shortboard">Shortboard</SelectItem>
                  <SelectItem value="fish">Fish</SelectItem>
                  <SelectItem value="funboard">Funboard</SelectItem>
                  <SelectItem value="longboard">Longboard</SelectItem>
                  <SelectItem value="gun">Gun / Step-up</SelectItem>
                  <SelectItem value="other">Other (specify in notes)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label htmlFor="length">Length</Label>
                <Input
                  id="length"
                  value={formData.length}
                  onChange={(e) => handleInputChange('length', e.target.value)}
                  placeholder="6'2&quot;"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  value={formData.width}
                  onChange={(e) => handleInputChange('width', e.target.value)}
                  placeholder="21&quot;"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="thickness">Thickness</Label>
                <Input
                  id="thickness"
                  value={formData.thickness}
                  onChange={(e) => handleInputChange('thickness', e.target.value)}
                  placeholder="2.5&quot;"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="artworkDescription">Artwork Description</Label>
              <Textarea
                id="artworkDescription"
                value={formData.artworkDescription}
                onChange={(e) => handleInputChange('artworkDescription', e.target.value)}
                placeholder="Describe your artwork vision..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Budget and Notes */}
        <div className="space-y-4 mt-6">
          <div>
            <Label htmlFor="budget">Budget Range</Label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-500">Under $500</SelectItem>
                <SelectItem value="500-750">$500 - $750</SelectItem>
                <SelectItem value="750-1000">$750 - $1,000</SelectItem>
                <SelectItem value="1000-1500">$1,000 - $1,500</SelectItem>
                <SelectItem value="over-1500">Over $1,500</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              placeholder="Any special requests, preferences, or questions..."
              className="mt-1"
              rows={4}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t">
          <Button
            onClick={handleEmailSubmit}
            className="flex-1 ocean-gradient text-white"
          >
            <Mail className="w-4 h-4 mr-2" />
            Send via Email
          </Button>
          
          <Button
            onClick={handleWhatsAppSubmit}
            variant="outline"
            className="flex-1"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Send via WhatsApp
          </Button>
          
          <Button
            onClick={handleSaveLocally}
            variant="secondary"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          We'll respond within 24 hours with a detailed quote and timeline for your custom board.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default CustomBoardModal;