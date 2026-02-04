import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, Store, Thermometer, Calendar, DollarSign, Loader2, BarChart3, Info, ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";

const API_URL = "https://onita-detachable-nakia.ngrok-free.dev/predict";

const fieldGroups = [
  {
    title: "Store Information",
    icon: Store,
    fields: [
      { name: "Store", label: "Store ID", tooltip: "Unique identifier for the store (1-45)", default: "1" },
      { name: "Dept", label: "Department", tooltip: "Department number within the store", default: "1" },
      { name: "Type", label: "Store Type", tooltip: "Type of store (A=1, B=2, C=3)", default: "1" },
      { name: "Size", label: "Store Size", tooltip: "Size of the store in square feet", default: "151315" },
    ]
  },
  {
    title: "Date & Time",
    icon: Calendar,
    fields: [
      { name: "Year", label: "Year", tooltip: "Year of the record", default: "2024" },
      { name: "Month", label: "Month", tooltip: "Month of the year (1-12)", default: "12" },
      { name: "Week", label: "Week", tooltip: "Week of the year (1-52)", default: "51" },
    ]
  },
  {
    title: "Economic Indicators",
    icon: DollarSign,
    fields: [
      { name: "CPI", label: "CPI", tooltip: "Consumer Price Index - measures inflation", default: "211.096" },
      { name: "Unemployment", label: "Unemployment %", tooltip: "Unemployment rate in the area", default: "8.106" },
      { name: "Fuel_Price", label: "Fuel Price", tooltip: "Average fuel price in the region", default: "2.572" },
    ]
  },
  {
    title: "Weather & Environment",
    icon: Thermometer,
    fields: [
      { name: "Temperature", label: "Temperature (°F)", tooltip: "Average temperature in Fahrenheit", default: "42.31" },
    ]
  },
  {
    title: "Promotional Markdowns",
    icon: BarChart3,
    fields: [
      { name: "MarkDown1", label: "MarkDown 1", tooltip: "Promotional markdown amount 1", default: "0" },
      { name: "MarkDown2", label: "MarkDown 2", tooltip: "Promotional markdown amount 2", default: "0" },
      { name: "MarkDown3", label: "MarkDown 3", tooltip: "Promotional markdown amount 3", default: "0" },
      { name: "MarkDown4", label: "MarkDown 4", tooltip: "Promotional markdown amount 4", default: "0" },
      { name: "MarkDown5", label: "MarkDown 5", tooltip: "Promotional markdown amount 5", default: "0" },
    ]
  }
];

const allFields = fieldGroups.flatMap(g => g.fields);

const Index = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isHoliday, setIsHoliday] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);
  
  const [formData, setFormData] = useState<Record<string, string>>(
    Object.fromEntries(allFields.map(f => [f.name, f.default]))
  );

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(Object.fromEntries(allFields.map(f => [f.name, f.default])));
    setIsHoliday(false);
    setPrediction(null);
    setCurrentStep(0);
  };

  const handlePredict = async () => {
    setIsLoading(true);
    setPrediction(null);

    const payload = {
      Store: parseFloat(formData.Store),
      Dept: parseFloat(formData.Dept),
      IsHoliday: isHoliday ? 1 : 0,
      Temperature: parseFloat(formData.Temperature),
      Fuel_Price: parseFloat(formData.Fuel_Price),
      MarkDown1: parseFloat(formData.MarkDown1),
      MarkDown2: parseFloat(formData.MarkDown2),
      MarkDown3: parseFloat(formData.MarkDown3),
      MarkDown4: parseFloat(formData.MarkDown4),
      MarkDown5: parseFloat(formData.MarkDown5),
      CPI: parseFloat(formData.CPI),
      Unemployment: parseFloat(formData.Unemployment),
      Type: parseFloat(formData.Type),
      Size: parseFloat(formData.Size),
      Year: parseFloat(formData.Year),
      Month: parseFloat(formData.Month),
      Week: parseFloat(formData.Week),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        },
        body: JSON.stringify([payload])
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data && data.length > 0 && data[0].prediction !== undefined) {
        setPrediction(data[0].prediction);
        toast({
          title: "Prediction Complete",
          description: "Sales forecast generated successfully!",
        });
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      toast({
        title: "Prediction Failed",
        description: error instanceof Error ? error.message : "Failed to get prediction",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentGroup = fieldGroups[currentStep];
  const isLastStep = currentStep === fieldGroups.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-background/20 rounded-xl backdrop-blur-sm">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Sales Predictor</h1>
              <p className="text-primary-foreground/80 text-sm">ML-Powered Sales Forecasting</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {fieldGroups.map((group, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                idx === currentStep
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : idx < currentStep
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <group.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{group.title}</span>
              <span className="sm:hidden">{idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Holiday Toggle */}
        <Card className="glass-card mb-6">
          <CardContent className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <Label htmlFor="holiday" className="font-medium">Holiday Week</Label>
                <p className="text-sm text-muted-foreground">Is this a holiday week?</p>
              </div>
            </div>
            <Switch id="holiday" checked={isHoliday} onCheckedChange={setIsHoliday} />
          </CardContent>
        </Card>

        {/* Current Section Card */}
        <Card className="glass-card mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <currentGroup.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>{currentGroup.title}</CardTitle>
                <CardDescription>Step {currentStep + 1} of {fieldGroups.length}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentGroup.fields.map(field => (
                <div key={field.name} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={field.name} className="font-medium">{field.label}</Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{field.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Input
                    id={field.name}
                    type="number"
                    step="any"
                    value={formData[field.name]}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="bg-background"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(prev => prev - 1)}
            disabled={isFirstStep}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="ghost" onClick={resetForm} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>

          {isLastStep ? (
            <Button onClick={handlePredict} disabled={isLoading} className="gap-2 gradient-primary">
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Predicting...
                </>
              ) : (
                <>
                  <TrendingUp className="h-4 w-4" />
                  Predict Sales
                </>
              )}
            </Button>
          ) : (
            <Button onClick={() => setCurrentStep(prev => prev + 1)} className="gap-2">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Prediction Result */}
        {prediction !== null && (
          <Card className="glass-card border-primary/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardContent className="py-8 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                <DollarSign className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-muted-foreground mb-2">Predicted Weekly Sales</h3>
              <p className="text-5xl font-bold text-primary">
                ${prediction.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>Developed by <span className="font-semibold text-foreground">Ahmed Essam</span></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
