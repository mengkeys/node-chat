module.exports = {
	success: function(data){
		return {
			code: 0,
			message: 'success',
			result: data
		}
	},
	error: function(err){
	    /* TODO 统一在此输出错误信息,方便代码调试,排查错误 */
        console.error(err);
		return {
			code: 1,
			message: 'error',
			result: err.message
		}
	}
};
