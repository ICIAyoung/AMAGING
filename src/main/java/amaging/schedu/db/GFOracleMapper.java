package amaging.schedu.db;

import java.util.List;

import amaging.schedu.bean.FeeBean;
import amaging.schedu.bean.Subject;
import amaging.schedu.grade.Grade;

public interface GFOracleMapper {
	/*Fee*/
	public List<FeeBean> getMonthFee(FeeBean fb);
	public int updFeeList(FeeBean fb);
	public int getMonthCheck(FeeBean fb);
	public List<FeeBean> getStudentList(FeeBean fb);
	public int insFeeList(FeeBean fb);
	public List<FeeBean> getMyFeeList(FeeBean fb);
	/*Grade*/
	public List<Subject> getTeacherClass(Subject sj);
	public List<Grade> getGrade(Subject sj);
	public List<Grade> getStudentList(Subject sj);
	public int regGrade(Grade grade);
}
