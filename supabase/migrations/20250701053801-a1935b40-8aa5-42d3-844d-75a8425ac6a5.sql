
-- Create applications table to store user applications
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  application_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'submitted',
  application_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own applications
CREATE POLICY "Users can view their own applications" 
  ON public.applications 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Create policy for users to insert their own applications
CREATE POLICY "Users can create their own applications" 
  ON public.applications 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create policy for users to update their own applications
CREATE POLICY "Users can update their own applications" 
  ON public.applications 
  FOR UPDATE 
  USING (auth.uid() = user_id);
