
    
    select
    a1.machine_id,
    round(avg(a1.timestamp - a.timestamp),3)as processing_time
    from activity a
    join activity a1
    on a1.machine_id = a.machine_id
    and a1.process_id = a.process_id
    and a1.activity_type = 'end'
    and a.activity_type = 'start'
    group by 1