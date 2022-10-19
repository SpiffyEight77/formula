# formula
The formula is a set of serverless functions running on [Supabase Edge Functions](https://supabase.com/edge-functions).

## formula-schedule.ts
The formula-schedule.ts is a serverless function providing the most recent infomation of the race to the client-side.

### before start
+ Clone this repo from GitHub.
+ Copy the content of [schedules.sql](https://github.com/SpiffyEight77/formula/blob/master/supabase/functions/formula-schedule/schedules.sql) to [Supabase Database Dashboard](https://supabase.com/database) and run the script to create the table.
+ Import the [schedules.csv](https://github.com/SpiffyEight77/formula/blob/master/supabase/functions/formula-schedule/schedules.csv) to [Supabase Database Dashbord](https://supabase.com/database) for inserting the data.

### how to deploy
+ Set up the Supabase Edge Functions and then fill the Supabase Database infomation in the .env file.
+ Run the command ``supabase functions deploy formula-schedule --project-ref your-project-ref --no-verify-jwt``
