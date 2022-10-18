// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
// This function script is modified from https://github.com/supabase/supabase/blob/master/examples/edge-functions/supabase/functions/select-from-table-with-auth-rls/index.ts

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.0.0-rc.12'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const now = new Date()
    const { data, error } = await supabaseClient.from('schedules')
    .select('country, round, grand_prix_name, track_image_url, track_image_name, start_at, end_at')
    .gte('end_at', now.toISOString())
    if (error) throw error
    
    return new Response(JSON.stringify({
      country:        data[0].country,
      round:          data[0].round,
      grandPrixName:  data[0].grand_prix_name,
      trackImageUrl:  data[0].track_image_url,
      trackImageName: data[0].track_image_name,
      startAt:        data[0].start_at,
      endAt:          data[0].end_at,
    }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
