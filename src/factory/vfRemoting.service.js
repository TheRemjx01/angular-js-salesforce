export default class VFRemotingService {
  static get $inject(){
    return ['$q', '$rootScope'];
  } ;
  // inject

  constructor($q, $rootScope) {
    this.$q = $q;
    this.$rootScope = $rootScope;
  }

  getAccountData (numAcc) {
      const deferred = this.$q.defer();

      const handleResFunc = (res) => {
        this.$rootScope.$apply(() => {
          deferred.resolve(res)
        })
      };


      GetAccountByRemoteAction(handleResFunc, numAcc);
      return deferred.promise;
  }

}