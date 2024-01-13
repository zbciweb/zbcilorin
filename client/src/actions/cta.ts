import { supabase } from "../client";

export const createCTA = (post: any) => async (dispatch: any) => {
    try {
      // Check if a record exists with the same subject or message
      
     
      const { data: existingData, error: existingError } = await supabase
        .from("contacts") // Replace with your table name
        .select()         
        .or( `subject.eq.${post.subject} , message.eq.${post.message}`);
        
  
      if (existingError) {
        console.error("Error checking for existing records:", existingError);
      } else if (existingData && existingData.length > 0) {
        // A record with the same subject or message already exists.
        // You can handle this case as needed. 
        return {
            status: 302,
            statusText: "Your message has been received. You would get feedback soon.",
          };  
    } else {
        // No existing record found, proceed with insertion
        const { error: insertionError } = await supabase
          .from("contacts") // Replace with your table name
          .insert([
            {
              name: post.fullName,
              subject: post.subject,
              email: post.email,
              message: post.message,
            },
          ])
          .single();
  
        if (insertionError) {
          console.error("Network Error");
        } else { 
            
          return {
            status: 201,
            statusText: "Form submitted successfully",
          };
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unexpected error", error);
      }
    }
  };
