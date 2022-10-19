create table schedules
(
    id               bigint generated by default as identity
        primary key,
    created_at       timestamp with time zone default now(),
    season           varchar,
    country          varchar,
    grand_prix_name  varchar,
    track_link       varchar,
    round            varchar,
    start_at         date,
    end_at           date,
    track_image_name varchar
);

alter table schedules
    owner to supabase_admin;

grant select, update, usage on sequence schedules_id_seq to postgres;

grant select, update, usage on sequence schedules_id_seq to anon;

grant select, update, usage on sequence schedules_id_seq to authenticated;

grant select, update, usage on sequence schedules_id_seq to service_role;

grant delete, insert, references, select, trigger, truncate, update on schedules to postgres;

grant delete, insert, references, select, trigger, truncate, update on schedules to anon;

grant delete, insert, references, select, trigger, truncate, update on schedules to authenticated;

grant delete, insert, references, select, trigger, truncate, update on schedules to service_role;

