# Write your MySQL query statement below
select s.student_id,
        s.student_name,
        s.subject_name,
        COALESCE(count(e.subject_name), 0) as attended_exams
from Examinations e
right join (
    select student_id,student_name,s.subject_name
    from Students
    cross join Subjects s
) s
on e.student_id = s.student_id and e.subject_name = s.subject_name
group by s.student_id,s.student_name,s.subject_name
order by  s.student_id,s.student_name